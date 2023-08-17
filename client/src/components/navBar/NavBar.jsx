import { Link,useNavigate} from "react-router-dom";
import "./navBar.css"
import { useState } from "react";
import ThemeToggle from "../themeToggle/ThemeToggle";


export default function NavBar() {
    return (
        <header className='navbar'>
            <div className="logo"><Link to={"/"}>LOGO</Link></div>
            <nav className="nav-links maxContainer">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/movies"}>Movie</Link></li>
                    <li><Link to={"/tvshow"}>Tv Show</Link></li>
                    <li><Link to={"/search"}>Search</Link></li>
                </ul>
            </nav>
            <div className="user">
                <img src="profile" alt="User Profile" />
                <Link>Username</Link>
            </div>
            <div className="theme">
                <ThemeToggle element={"toggle"} />
                {/* <button id="theme">X</button>
                <label htmlFor="theme">dark mode</label> */}
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