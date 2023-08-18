import { Link,useNavigate} from "react-router-dom";
import "./navBar.css"
import { useState } from "react";
export default function NavBar() {

    return (
        <header className='navbar'>
            <TopNavBar/>
            <SideNavBar/>
        </header>
    );
}

function TopNavBar() {
    const [QInput,setQInput] =useState("")
    const navigate = useNavigate();
    
    const searchSubmitHandle=(e)=>{
        e.preventDefault()
        if (QInput.trim() !== '') {
            navigate(`search/q/${QInput.replace(" ", "+")}`);
        } else {
            console.log('Input is empty. Search not allowed.');
        }
        // setQInput("")
    }
    return (
        <nav className="top-navbar">
            <div className='logo'>
                <Link to={"/"}>
                    <div className='img'>
                        <i className='fa-solid fa-dragon'></i>
                    </div>
                    <span>LOGO name</span>
                </Link>
                {/* <i className='menuToggle fa-solid fa-square-caret-left'></i> */}
            </div>
            <form className="search-container" action='/' onSubmit={searchSubmitHandle}>
                <input
                    type='text'
                    placeholder='Search'
                    value={QInput}
                    onChange={(e) => setQInput(e.target.value)}
                />
                <button type='submit'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </nav>
    );
}


function SideNavBar() {
    return (
        <nav className='side-navbar'>
            <ul className='nav-links'>
                <li>
                    <Link to={"/"}>
                        <span><i className='fa-solid fa-house'></i></span>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/explore`}>
                        <span><i className="fa-solid fa-compass"></i></span>
                        <span>Search</span>
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
    // const [qInput,setQInput] = useState("")
    
    // const navigate = useNavigate();
    
    // const searchSubmitHandle=(e)=>{
    //     e.preventDefault()
    //     if (qInput.trim() !== '') {
    //         navigate(`/q/${qInput.replace(" ", "+")}`);
    //     } else {
    //         console.log('Input is empty. Search not allowed.');
    //     }
    //     setQInput("")
    // }
//     return (     
        // // <nav className="nav-search">
        //     <form action='/' onSubmit={searchSubmitHandle}>
        //         <input
        //             type='text'
        //             placeholder='Search'
        //             value={qInput}
        //             onChange={(e) => setQInput(e.target.value)}
        //         />
        //         <button type='submit'>Search</button>
        //     </form>
        // // </nav>
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