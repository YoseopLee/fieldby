import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../../Context/context';


const MainBar = () => {
    
    const { openSidebar } = useGlobalContext();

    return (
        <MainBarCSS>
            <div className="header">
                <Link to ="/">
                    <img src="images/fielddbylogo.png" alt="home" className="header-logo"/>
                </Link>
                <div className="header-wrapper">
                    <img src="images/search.png" alt="search" className="header-search"/>
                    <img src="images/hamburger.png" alt="menu" className="header-menu" onClick={openSidebar}/>
                </div>
            </div>
        </MainBarCSS>
    );
}

const MainBarCSS = styled.div`
    .header{
        height: 60px;
        position: fixed;
        top: 0;
        width: calc(100% - 36px);
        max-width: 600px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 18px;
        padding-right: 18px;
        z-index : 1000;
        .header-logo{
            height: 42px;
        }
        .header-wrapper{
            display: flex;
            justify-content: space-between;
            width: calc(20%);
            .header-search{
                height: 22px;
            }
            .header-menu{
                height: 20px;
            }
        }
    }
`;

export default MainBar;