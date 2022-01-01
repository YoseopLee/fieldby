import axios from "axios";
import { createAction, handleActions } from "redux-actions"; 
import { produce } from "immer";
import { useNavigate } from "react-router-dom";

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

// 카카오로그인
const kakaoLogin = (code, user) => {

    
    return function (dispatch, getState){
        const navigate = useNavigate();
        axios({
            method:"GET",
            url : `http://localhost:8000/Api/Member/Oauth2ClientCallback/kakao/?code=${code}`,
        })
            .then(async(res) => {
                console.log(res.data.accessToken);
                const ACCESS_TOKEN = res.data.accessToken;

                await localStorage.setItem("token", ACCESS_TOKEN);

                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${ACCESS_TOKEN}`;

                dispatch(setUser());
                await navigate("/");
            })
            .catch((err) => {
                console.log("소셜로그인 에러", err);
                navigate("/login", {replace : true});
            });
    }
}

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
    },
    initialState
);

const actionCreators = {
    setUser,
    kakaoLogin,
};

export { actionCreators };