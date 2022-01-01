import React from "react";
import styled from "styled-components";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import Navbar from "../../Components/Common/Navbar/Navbar";
import { KAKAO_AUTH_URL } from "../../Components/Login/KaKao/KaKaoAuth";

const Login = () => {
    return (
        <>
        <MainBar />
        <Navbar />
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
                <button className="naver-btn">네이버로 로그인</button>
                <a className="kakao-btn" href={KAKAO_AUTH_URL}>카카오로 로그인</a>
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
            background-color : #5AC451;
        }
        .kakao-btn{
            color : #212121;
            background-color : #ffd400;
            padding : 16px;
            outline : none;
            border : none;
            border-radius : 12px;
            font-size : 16px;
            font-weight : bold;
            margin-bottom : 8px;
            text-align : center;
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