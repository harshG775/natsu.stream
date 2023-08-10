import { Link } from "react-router-dom";
import "./navBar.css"

export default function NavBar() {
    return (
        <div className="navbar-outer">
            <div><Link to="/">Logo</Link></div>

            <nav className="maxContainer">
                <form action="/">
                    <input type="text" placeholder="Search" />
                    <button type="submit">Search</button>
                </form>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Trending">Trending</Link></li>
                    <li><Link to="/Release">Release</Link></li>
                    <li><Link to="/Update">Update</Link></li>
                </ul>
            </nav>
        </div>
    );
}
