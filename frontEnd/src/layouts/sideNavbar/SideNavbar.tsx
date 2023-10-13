import { Link } from "react-router-dom";
import "./sideNavbar.css"

export default function SideNavbar() {
    return (
        <nav className='side-navbar'>
            <ul className='nav-links'>
                <li className="nav-logo">
                    <a>
                        <span><i className="fa-solid fa-dragon"></i></span>
                        <span>Dragneel</span>
                    </a>
                </li>
                <li>
                    <Link to="/">
                        <span><i className='fa-solid fa-house'></i></span>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/discover`}>
                        <span><i className="fa-solid fa-compass"></i></span>
                        <span>Discover</span>
                    </Link>
                </li>
                <li>
                    <Link to="/movie">
                        <span><i className='fa-solid fa-film'></i></span>
                        <span>Movie</span>
                    </Link>
                </li>
                <li>
                    <Link to="/tv">
                        <span><i className="fa-solid fa-desktop"></i></span>
                        <span>Tv Show</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        {/* <img src='profile' alt='' /> */}
                        <span><i className="fa-solid fa-gear"></i></span>
                        <span>Settings</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}