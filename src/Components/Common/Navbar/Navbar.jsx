import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useGlobalContext } from '../../Context/context';

const Navbar = () => {
    
    const { isSidebarOpen , closeSidebar } = useGlobalContext(); 

    return(
        <NavBarCSS>
            <aside className={`${isSidebarOpen ? 'sidebar show-slider' : 'sidebar'}`}>
                <div className="navbar-header">
                    <img src="images/close.png" alt="close" className="btn-close" onClick={closeSidebar}/>
                </div>
                <ul className="links">
                    <Link to="/style">
                        <li className="lists" onClick={closeSidebar}>STLYE</li>
                    </Link>
                    <Link to="/store">
                        <li className="lists" onClick={closeSidebar}>STORE</li>
                    </Link>
                    <Link to="/bookmark">
                        <li className="lists" onClick={closeSidebar}>찜</li>
                    </Link>
                    <Link to="/mypage">
                        <li className="lists" onClick={closeSidebar}>마이페이지</li>
                    </Link>    
                </ul>
                <Link to="/login">
                    <div className="login-container">
                        <div className="login-area" onClick={closeSidebar}>로그인</div>    
                    </div>           
                </Link>
            </aside>
        </NavBarCSS>
    )
}

const NavBarCSS = styled.div`
    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        display: grid;
        grid-template-rows: auto 1fr auto;
        row-gap: 1rem;
        z-index : 9999;
        transition : .3s;
        transform : translate(100%);
        .navbar-header{
            display: flex;
            width : calc(100% - 40px);
            justify-content: flex-end;
            align-items: center;
            padding: 1.2rem 1.4rem;
            .btn-close{
                height : 20px;
            }
        }
        .links{
            padding-inline-start : 0;
        }
            .links > a{
                font-size : 18px;
                font-weight : bold;
            }
            .lists{
                border-bottom : 1px solid #dcdcdc;
                padding : 18px;
            }

    }
    .show-slider{
        transform:translate(0);
    }
    .login-container{
        margin-left : 40px;
        width : calc(100% - 80px);
    }
    .login-area{
        border : 1px solid #22BAA8;
        border-radius : 12px;
        padding : 16px;
        color : #22BAA8;
        font-size : 20px;
        font-weight : bold; 
        margin-bottom : 60px;
        text-align : center;
    }
`;

export default Navbar;