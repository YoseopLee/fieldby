import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../../../Redux/Reducers/user";
import Spinner from "../../Common/Spinner/Spinner";

export const OAuth2RedirectHandler = (props) => {
    
    const dispatch = useDispatch();
    
    // 인가코드
    let code = new URL(window.location.href).searchParams.get("code");

    useEffect(async() => {
        await dispatch(userActions.kakaoLogin(code));
    }, []);

    return <Spinner />
};