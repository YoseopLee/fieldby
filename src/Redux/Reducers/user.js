import axios from "axios";
import { createAction, handleActions } from "redux-actions"; 
import { produce } from "immer";
import { history } from "../configureStore";
import { setCookie, deleteCookie, getCookie } from "../../Components/Common/Cookie/Cookie"; 


// Action type
const SET_USER = "SET_USER"; // 로그인
const GET_USER = "GET_USER"; // 유저 정보 불러오기
const LOG_OUT = "LOG_OUT"; // 로그아웃
const NAME_CHECK = "NAME_CHECK"; // 닉네임 중복검사 완료유무
const AUTH_CHECK = "AUTH_CHECK"; // 인증 완료 실시여부
const DELETE_USER = "DELETE_USER" // 회원 탈퇴
const NAME_CHANGE = "NAGE_CHANGE" // 회원명 변경

// 액션 생성함수
const setUser = createAction(SET_USER, () => ({}));
const getUser = createAction(GET_USER, (username) => ({username}));
const logOut = createAction(LOG_OUT, () => ({}));
const nameCheck = createAction(NAME_CHECK, (name_check) => ({ name_check }));
const authCheck = createAction(AUTH_CHECK, (auth_check) => ({ auth_check }));
const deleteUser = createAction(DELETE_USER, () => ({}));
const changeName = createAction(NAME_CHANGE, (name) => ({ name }));

// 초기값
const initialState = {
  user: " ",
  is_login: false,
  name_check: false,
  auth_check: false,
};

// 자체 로그인
const loginSV = (email, pwd) => {
    return function(dispatch, getState){
        axios({
            method : "POST",
            url : ``,

            data:{
                email : email,
                password : pwd,
            },
        })
            .then(async(res) => {
                const ACCESS_TOKEN = res.data.accessToken;
                const ACCESS_TOKEN_EXP =  res.data.accessTokenExPiresIn;
                const REFRESH_TOKEN =  res.data.refreshToken;

                // cookie에 RefreshToken 저장 (아직 httpOnly 설정 못함)
                await setCookie("is_login", REFRESH_TOKEN);

                // local에 AccessToken저장
                await localStorage.setItem("token", ACCESS_TOKEN);

                // accessToken default 설정
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${ACCESS_TOKEN}`;

                const Current_time = new Date().user.is_login;

                const state = getState().user.is_login;

                // ACCESS_TOKEN 만료 1분 전마다 연장함수 실행
                setTimeout(
                    extensionAccess(state),
                    ACCESS_TOKEN_EXP - Current_time - 60000
                );

                await alert("환영합니다!")

                dispatch(setUser());
                await history.push('/');
                window.location.reload();
            })
                .catch((err) => {
                    alert("로그인 실패!")
                    console.log("로그인 실패", err);
                    history.replace('/login');
                });
    }
}

// 로그인 연장 함수 (백단 구현 중)
const extensionAccess = (state) => {
    return function (dispatch, getState){
        const accessToken = localStorage.getItem("token");
        const refreshToken = getCookie("is_login");

        axios({
            method: "POST",
            url : `https://fieldby.me/reissue`, // /reissue refresh_Token 발급서버 필요.
            data : {
                accessToken : accessToken,
                refreshToken : refreshToken,
            },
            headers : {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then(async (res) => {
                const ACCESS_TOKEN = res.data.accessToken;
                const REFRESH_TOKEN = res.data.refreshToken;
                const ACCESS_TOKEN_EXP = res.data.accessTokenExPiresIn;

                // 새롭게 받은 refreshToken도 cookie에 다시 저장
                await setCookie("is_login", REFRESH_TOKEN);

                // 새롭게 받은 ACCESS_TOKEN 헤더에 담기
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${ACCESS_TOKEN}`;

                const Current_time = new Date().getTime();

                // 로그인 상태 true로 변경
                state = true;

                // 1분 전 자동실행
                setTimeout(
                    extensionAccess(state),
                    ACCESS_TOKEN_EXP - Current_time - 60000 * 29
                );
                return;
            })
            .catch((err) => {
                console.log("연장실패", err);
            });
    };
};
// 회원가입
const signUpSV = (email, nickname, pwd, pwdCheck) => {
    return function(dispatch, getState){
        axios({
            method : "POST",
            url : ``,
            data : {
                email : email,
                password : pwd,
                passwordCheck : pwdCheck,
                username : nickname,
            },
        })
            .then((res) => {
                alert("회원가입이 완료되었습니다")
                history.replace("/login");
            })
            .catch((err) => {
                console.log("회원가입 실패", err);
            });
    };
};

// 네이버 로그인
function NaverLogin (code, user){
    return function (dispatch, getState){
    
        axios({
            method : "GET",
            url : `https://fieldby.me/Api/Member/Oauth2ClientCallback/naver/?code=${code}`
        })
            .then(async(response) =>{
                console.log(response.data.access_token);
                const ACCESS_TOKEN = (response.data.access_token); // token set from Naver
                const ACCESS_TOKEN_EXP = (response.data.expires_in);
                const REFRESH_TOKEN = (response.data.refresh_token);

                // refresh_token set in cookie , login 상태 구분
                await setCookie("is_login", REFRESH_TOKEN);

                await localStorage.setItem('token', ACCESS_TOKEN);

                // current time
                const Current_time = new Date().getTime();

                // Header Configuration
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${ACCESS_TOKEN}`;
                
                const state = getState().user.is_login;

                // 토큰 만료 1분 전 자동연장
                setTimeout(
                    extensionAccess(state),
                    ACCESS_TOKEN_EXP - Current_time - 60000
                );

                await alert("환영합니다")

                dispatch(setUser());
                await history.push('/');
                window.location.reload();
            })
            .catch((err) => {
                console.log("Fail Naver Login", err);
            });
    }
}


// 카카오로그인
function KakaoLogin (code, user) {
    
        return function (dispatch, getState){
                
        axios({
            method:"GET",
            url : `https://fieldby.me/Api/Member/Oauth2ClientCallback/kakao/?code=${code}`,
        })
            .then(async(response) => {
                console.log(response.data.access_token);
                const ACCESS_TOKEN = (response.data.access_token); // 토큰 담음
                const ACCESS_TOKEN_EXP = (response.data.expires_in);
                const REFRESH_TOKEN = (response.data.refresh_token);

                // refresh Token 쿠키에 저장
                await setCookie("is_login", REFRESH_TOKEN);

                await localStorage.setItem('token', ACCESS_TOKEN);

                // 현재시간
                const Current_time = new Date().getTime();

                // Header Configuration
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${ACCESS_TOKEN}`;

                const state = getState().user.is_login;

                // 토큰 만료 1분 전 자동연장
                setTimeout(
                    extensionAccess(state),
                    ACCESS_TOKEN_EXP - Current_time - 60000
                );
                
                await alert("환영합니다!")

                dispatch(setUser());
                await history.push('/'); 
                window.location.reload();          
            })
            .catch((err) => {
                console.log("소셜로그인 에러", err);
                history.replace('/login');
                window.location.reload();
            });
    }
}

// 유저 정보 불러오기
const getUserSV = () => {
    return function(dispatch, getState){
        const ACCESS_TOKEN = localStorage.getItem("token");

        axios({
            method : "GET",
            url: ``,
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        })
            .then(() => {
                dispatch(getUser());
            })
            .catch((err) => {
                console.log("유저 정보 가져오기 실패", err)
            });
    };
};


export default handleActions(
    {
        [SET_USER]:(state, action) =>
            produce(state, (draft) => {
                draft.is_login = true;
            }),
        
        [GET_USER]:(state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.username;
                draft.is_login = true;
            }),
        [LOG_OUT]:(state, action) =>
            produce(state, (draft) => {
                // delete cookie
                deleteCookie("is_login");
                // localStorage clear
                localStorage.clear();
                draft.is_login = false;
            }),
    },
    initialState
);

const actionCreators = {
    setUser,
    KakaoLogin,
    logOut,
    NaverLogin,
};

export { actionCreators };