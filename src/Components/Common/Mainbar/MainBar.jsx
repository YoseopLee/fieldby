import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const MainBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    
    return (
        <MainBarCSS>
            <div className="header">
                <Link to ="/">
                    <img src="images/fielddbylogo.png" alt="home" className="header-logo"/>
                </Link>
                <div className="header-wrapper">
                    <button>
                        <img src="images/search.png" alt="search" className="header-search"/>
                    </button>
                    <button onClick={openSidebar}>
                        <img src="images/hamburger.png" alt="menu" className="header-menu"/>
                    </button>
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
        width: calc(100% - 24px);
        max-width: 600px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top : 6px;
        padding-left: 12px;
        padding-right: 18px;
        z-index : 1000;
        .header-logo{
            height: 48px;
        }
        .header-wrapper{
            display: flex;
            justify-content: space-between;
            .header-search{
                height: 22px;
            }
            .header-menu{
                height: 20px;
            }
            button {
                border : none;
                padding : 2px;
                background-color : #fff;
            }
        }
    }
`;

export default MainBar;