import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";


const DetailBar = () => {

    const goBack = useNavigate();

    return (
        <DetailBarCSS>
            <span 
                className="back-btn"
                onClick={() => goBack(-1)}    
            >뒤로</span>
        </DetailBarCSS>
    );
};

const DetailBarCSS = styled.div`
    height : 55px;
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
        height : 24px;
    }
    .back-btn{
        font-size : 13px;
        color : #766F6F;
    }
`

export default DetailBar;

