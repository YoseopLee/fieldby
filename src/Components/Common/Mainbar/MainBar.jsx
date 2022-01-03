import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarData } from './MainbarData';
import './Mainbar.css';


const MainBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const [black, setBlack] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
        setBlack(!black)
    }
    
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
                    <button>
                        <img src="images/hamburger.png" alt="menu" className="header-menu" onClick={showSidebar}/>
                    </button>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <img src="images/close.png" alt="close" className="btn-close" onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <Link to="/login">
                    <div className="login-container">
                        <div className="login-area" onClick={showSidebar}>로그인</div>    
                    </div>           
                </Link>
            </nav>
            <div className={black ? 'black active' : 'black'} onClick={showSidebar}></div>
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