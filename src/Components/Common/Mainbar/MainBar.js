import { Link } from 'react-router-dom';
import './MainBar.css';

function MainBar(){
    return (
        <div className="main-bar">
            <Link to ="/">
                <img src="images/fielddbylogo.png" alt="home" className="main-logo"/>
            </Link>
            <div className="main-bar-wrapper">
                <img src="images/search.png" alt="search" className="main-bar-search"/>
                <img src="images/hamburger.png" alt="menu" className="main-bar-menu"/>
            </div>
        </div>
    );
}

export default MainBar;