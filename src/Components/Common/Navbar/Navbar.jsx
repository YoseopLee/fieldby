import React from 'react';
import styled from "styled-components";
import { useGlobalContext } from '../../Context/context';

const Navbar = () => {
    
    const { isSidebarOpen , closeSidebar } = useGlobalContext(); 

    return(
        <NavBarCSS className={`${isSidebarOpen ? 'sidebar show-slider' : 'sidebar-hide'}`}>
            <div className="nav-container">

            </div>
        </NavBarCSS>
    )
}

const NavBarCSS = styled.aside`
    .nav-container{
        
    }
`;

export default Navbar;