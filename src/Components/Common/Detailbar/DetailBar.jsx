import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";


const DetailBar = () => {

    const goBack = useNavigate();

    return (
        <DetailBarCSS>
            <img 
                src="/images/arrowleft.png"
                alt="back"
                className="back-logo" 
                onClick={() => goBack(-1)}
            />
        </DetailBarCSS>
    );
};

const DetailBarCSS = styled.div`
    height : 60px;
    position : fixed;
    top : 0;
    width : 100%;
    max-width : 600px;
    background-color : #fff;
    z-index : 1000;
    padding-left : 18px;
    display : flex;
    align-items : center;
    .back-logo{
        height : 30px;
    }
`

export default DetailBar;

