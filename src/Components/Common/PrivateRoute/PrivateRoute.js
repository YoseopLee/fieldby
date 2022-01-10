import React from "react";
import { Navigate , Route } from "react-router-dom";


function PrivateRoute({ element : Component, ...parentProps }) {
    const status = localStorage.getItem("token");

    // 토큰 없으면 (false) 비로그인
    const is_login = status === null ? false : true;
    return (
        <>
            <Route
                {...parentProps}
                render={(props) =>
                    is_login ? <Component {...props} /> : <Navigate replace to = "/" />
                }
            />
        </>
    )
}

export default PrivateRoute;