import { Link } from "react-router-dom";
import "./footer.css"
export default function Footer() {
    return (
        <footer className="maxContainer">
            <div className="footer-links">
                <ul>
                    {/* Navigation Links */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/tv-shows">TV Shows</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/genres">Genres</Link></li>
                </ul>
            </div>
            
            <div className="footer-social">
                {/* Social Media Icons */}
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
            
            <div className="footer-info">
                {/* Copyright Information */}
                <p>&copy; {new Date().getFullYear()} Natsu.to All rights reserved.</p>
                
                {/* Support and Help */}
                <ul>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/help-center">Help Center</Link></li>
                </ul>
                
                {/* Language and Region */}
                <div className="language-region">
                    {/* Language Selector */}
                    <select>
                        <option value="en-US">English (US)</option>
                        <option value="hi">Hindi (IN)</option>
                        {/* Add more language options here */}
                    </select>
                </div>
            </div>
        </footer>
    );
}
