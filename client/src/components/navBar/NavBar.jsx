import { Link,useNavigate} from "react-router-dom";
import "./navBar.css"
import { useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";


export default function NavBar() {
    return (
        <header className='navbar'>
            <div className='navbar-inner'>
                <div className='logo'>
                    <Link to={"/"}>
                        <h4 className="img"><i className="fa-solid fa-dragon"></i></h4>
                         <span>log name</span>
                    </Link>
                    <i className="menuToggle fa-solid fa-square-caret-left"></i>
                </div>
                <nav className='nav-links'>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                <i className='fa-solid fa-house'></i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/movies"}>
                                <i className='fa-solid fa-film'></i>
                                <span>Movie</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/tvshow"}>
                                <i className='fa-solid fa-tv'></i>
                                <span>Tv Show</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/search"}>
                                <i className='fa-solid fa-magnifying-glass'></i>
                                <span>Search</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='user'>
                    <img src='profile' alt='User Profile' />
                    <div>
                        <Link to={"user"}>Username</Link>
                    </div>
                    <div className='theme-toggle'>
                        <ThemeToggle >
                            <i className="fa-solid fa-circle-half-stroke"></i>
                            THEME
                        </ThemeToggle>
                        
                    </div>
                </div>
            </div>
        </header>
    );
}









// // navbar
// export default function NavBar() {
//     return (
//         <header className="navbar">
//             <div className="maxContainer">
//                 <Logo/>
//                 <SearchInput/>
//                 <NvaLinks/>
//             </div>
//         </header>
//     );
// }

// function Logo() {
//     return (
//         <div className="nav-logo">
//             <Link to={"/"}>Logo</Link>
//         </div>
//     );
// }

// function SearchInput() {
//     const [qInput,setQInput] = useState("")
    
//     const navigate = useNavigate();
    
//     const searchSubmitHandle=(e)=>{
//         e.preventDefault()
//         if (qInput.trim() !== '') {
//             navigate(`/q/${qInput.replace(" ", "+")}`);
//         } else {
//             console.log('Input is empty. Search not allowed.');
//         }
//         setQInput("")
//     }
//     return (     
//         // <nav className="nav-search">
//             <form action='/' onSubmit={searchSubmitHandle}>
//                 <input
//                     type='text'
//                     placeholder='Search'
//                     value={qInput}
//                     onChange={(e) => setQInput(e.target.value)}
//                 />
//                 <button type='submit'>Search</button>
//             </form>
//         // </nav>
//     );
// }

// function NavLinks() {
//   return (
//         <nav className="nav-links">
//             <ul>
//                 <li><Link to={"/"}>Home</Link></li>
//                 <li><Link to={"/movies"}>Movie</Link></li>
//                 <li><Link to={"/tvshow"}>Tv Show</Link></li>
//                 <li><Link to={"/search"}>Search</Link></li>
//             </ul>
//         </nav>
//     )
// }