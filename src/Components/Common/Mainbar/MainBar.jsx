import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IntroSidebarData, LoginSidebarData } from './MainbarData';
import './Mainbar.css';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from "../../../Redux/Reducers/user";
import { history } from '../../../Redux/configureStore';


const MainBar = () => {
    const dispatch = useDispatch();
    
    // Login 상태
    const status = localStorage.getItem("token");
    const is_login = status === null ? false : true;

    const [sidebar, setSidebar] = useState(false);
    const [black, setBlack] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
        setBlack(!black)
    }

    const LOGOUT = () => {
        dispatch(userActions.logOut());
        history.replace('/login');
        window.location.reload();
        alert("로그아웃 되었습니다.")
    }
    
    return (
        <>
            {is_login 
                ? (
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
                            {LoginSidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="logout">
                            <button className="logout-btn" onClick={LOGOUT}>
                                로그아웃
                            </button>
                        </div>
                    </nav>
                    <div className={black ? 'black active' : 'black'} onClick={showSidebar}></div>
                </MainBarCSS>
            ) : (
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
                            {IntroSidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <div className={black ? 'black active' : 'black'} onClick={showSidebar}></div>
                </MainBarCSS>
            )}
        </>
    );
}

const MainBarCSS = styled.div`
    .header{
        height: 50px;
        position: fixed;
        top: 0;
        width: calc(100% - 18px);
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
            height: 40px;
        }
        .header-wrapper{
            display: flex;
            justify-content: space-between;
            align-items : flex-start;
            .header-search{
                height: 21px;
            }
            .header-menu{
                height: 19px;
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