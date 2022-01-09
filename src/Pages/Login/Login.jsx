import React from "react";
import styled from "styled-components";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import { KAKAO_AUTH_URL } from "../../Components/Login/KaKao/KaKaoAuth";
import { NAVER_AUTH_URL } from "../../Components/Login/Naver/NaverAuth";

const Login = () => {
    return (
        <>
        <MainBar />
        <LoginContainerCSS>
            <div className="header">
                <img src="images/fielddbylogo.png" alt="" className="header-logo"/>
            </div>
            <div className="input-container">
                <input type="email" placeholder="이메일" className="id-input"></input>
                <input type="password" placeholder="비밀번호" className="pw-input"></input>
            </div>
            <div className="btn-container">
                <button className="login-btn">
                    로그인
                </button>
                <a className="naver-btn" href={NAVER_AUTH_URL}>
                    <img src="images/btn_naver.png" alt="" className="btn-naver"/>
                    네이버 로그인
                </a>
                <a className="kakao-btn" href={KAKAO_AUTH_URL}>
                    <img src="images/kakaolink_btn_small.png" alt="" className="btn-kakao"/>
                    카카오 로그인
                </a>
            </div>
            <div className="more-container">
                <span>이메일 가입</span>
                <span className="bar">|</span>
                <span>이메일 찾기</span>
                <span className="bar">|</span>
                <span>비밀번호 찾기</span>
            </div>
        </LoginContainerCSS>
        </>
    );
}

const LoginContainerCSS = styled.div`
    margin-top : 120px;
    .header{
        display : flex;
        justify-content : center;
        .header-logo{
            height : 60px;
        }
    }
    .input-container{
        display : flex;
        flex-direction : column;
        margin-top : 60px;
        margin-left : 24px;
        width : calc(100% - 48px);
        input{
            padding : 12px;
            outline : none;
            border : none;
            border-bottom : 1px solid #212121;
            margin-bottom : 24px;
            font-size : 16px;
        }
    }
    .btn-container{
        display : flex;
        flex-direction : column;
        margin-left : 16px;
        width : calc(100% - 32px);
        margin-top : 15px;
        button{
            padding : 18px;
            outline : none;
            border : none;
            border-radius : 12px;
            font-size : 16px;
            font-weight : bold;
            margin-bottom : 8px;
            margin : 0 0 12px 0;
        }
        .login-btn{
            color : #fff;
            background-color : #212121;
            .login-btn-logo{
                height : 20px;
            }
        }
        .naver-btn{
            color : #fff;
            background-color : #03C75A;
            outline : none;
            border : none;
            border-radius : 12px;
            padding : 8px;
            font-size : 16px;
            font-weight : bold;
            margin-bottom : 8px;
            text-align : center;
            align-items : center;
            display : flex;
            justify-content : center;
            .btn-naver{
                height : 40px;
            }
        }
        .kakao-btn{
            color : #212121;
            background-color : #fee500;
            padding : 16px;
            outline : none;
            border : none;
            border-radius : 12px;
            font-size : 16px;
            font-weight : bold;
            margin-bottom : 8px;
            text-align : center;
            display : flex;
            align-items : center;
            justify-content : center;
            .btn-kakao {
                height : 24px;
                margin-right : 8px;
            }
        }
    }
    .more-container{
        width : calc(100% - 72px);
        display : flex;
        justify-content : space-around;
        margin-left : 36px;
        margin-top : 25px;
        span{
            font-size : 13px;
        }
        .bar{
            color : #747474;
        }   
    }
`



export default Login;