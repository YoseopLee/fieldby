import React, { useEffect } from "react"
import { useDispatch ,useSelector } from "react-redux";
import { actionCreators as userActions } from "../../../Redux/Reducers/user";
import Spinner from "../../Common/Spinner/Spinner";

const OAuth2RedirectHandlerNaver = (props) => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);

    // authorize_code 
    let code = new URL(window.location.href).searchParams.get("code");

    useEffect(async() => {
        await dispatch(userActions.NaverLogin(code))
    }, []);

    return <Spinner />
};

export default OAuth2RedirectHandlerNaver;