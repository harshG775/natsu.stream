import { Link } from "react-router-dom";
import "./sideBar.css"

export default function SideNavBar() {
    return (
        <header className="side-navbar-header">
            <nav className='side-navbar'>
                <ul className='nav-links'>
                    <li>
                        <Link to={"/"}>
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
                        <Link to={"/movies"}>
                            <span><i className='fa-solid fa-film'></i></span>
                            <span>Movie</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/tvshow"}>
                            <span><i className="fa-solid fa-desktop"></i></span>
                            <span>Tv Show</span>
                        </Link>
                    </li>
                    <li className='user'>
                        <Link to={"user"}>
                            {/* <img src='profile' alt='' /> */}
                            <span><i className="fa-solid fa-user"></i></span>
                            <span>User</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}