import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import MainBar from "../../Components/Common/Mainbar/MainBar";
import { actionCreators as userActions } from "../../Redux/Reducers/user";

const Mypage = () => {
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.user);  // 확인 필요함.

    // Login 상태만 접근 가능
    const status = localStorage.getItem("token");
    const is_login = status === null ? false : true;

    return (
        <>
            {is_login
                ? (
                    <>
                        <MainBar />
                        <MypageCSS>
                            <div className="mypage-home">
                                <div className="user-membership">
                                    <div className="user-detail">
                                        <div className="user-thumb">
                                            <img src="images/blank_profile.png" alt="" className="user-thumbnail"/>
                                        </div>
                                        <div className="user-info">
                                            <div className="info_box">
                                                <strong className="name">{username}</strong>
                                                <a href="/profile-edit" className="user-info-btn">프로필 수정</a>
                                                <a href="/my-style" className="user-info-btn" style={{marginLeft: '7px'}}>내 스타일</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MypageCSS>
                    </>
                ) : (
                    <Navigate replace to="/login" />
                )
            }
        </>
        
    )
}

const MypageCSS = styled.div`
    margin-top : 60px;
    over-flow : hidden;
    min-height : 380px;
    padding : 0;
    .user-membership{
        border-radius : 0;
        display : block;
        padding : 0;
        .user-detail{
            padding-left : 16px;
            padding-right : 16px;
            padding : 16px 24px;
            display : flex;
            .user-thumb{
                position : relative;
                margin-right : 12px;
                width : 100px;
                height : 100px;
                border-radius : 100%;
                flex-shrink : 0;
                .user-thumbnail{
                    width : 100%;
                    height : 100%;
                    border-radius : 100%;
                }
            }
            .user-info{
                max-width : calc(100% - 112px);
                display : flex;
                align-items : center;
                .info_box{
                    max-width : 100%;
                    .name{
                        overflow : hidden;
                        text-overflow : ellipsis;
                        white-space : nowrap;
                        line-height : 22px;
                        display : block;
                        font-size : 18px;
                        font-weight : 600;
                        color : #000;
                    }
                    .email{
                        margin : 0;
                        padding : 0;
                        overflow : hidden;
                        text-overflow : ellipsis;
                        white-space : nowrap;
                        line-height : 18px;
                        font-size : 14px;
                        color : rgba(34,34,34, .5);
                    }
                    .user-info-btn{
                        margin-top : 12px;
                        align-self : flex-start;
                        border : 1px solid #d3d3d3;
                        color : rgba(34,34,34, .8);
                        font-size : 12px;
                        letter-spacing : -.06px;
                        padding : 0 14px;
                        height : 34px;
                        line-height : 32px;
                        border-radius : 10px;
                        display : inline-block;
                        cursor : pointer;
                        vertical-align : middle;
                        text-align : center;
                        background-color : #fff;
                    }
                }
            }
        }
    }
`

export default Mypage;