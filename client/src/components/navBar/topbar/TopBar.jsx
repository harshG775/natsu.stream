import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import "./topBar.css"

export default function TopNavBar() {
    return (
        <header className="top-navbar-outer maxContainer">
            <nav className="top-navbar">
                <NavLogo/>
                <SearchBox/>
            </nav>
        </header>
    );
}
// navLogo
function NavLogo() {
    return (
        <div className='logo'>
            <Link to={"/"}>
                <div className='img'>
                    <i className='fa-solid fa-dragon'></i>
                </div>
                <span>Natsu G</span>
            </Link>
        </div>
    );
}

function SearchBox() {
    const [QInput,setQInput] =useState("")
    const navigate = useNavigate();
    
    const searchSubmitHandle=(e)=>{
        e.preventDefault()
        if (QInput.trim() !== '') {
            navigate(`search/q/${QInput.replace(" ", "+")}`);
        } else {
            console.log('Input is empty. Search not allowed.');
        }
        setQInput("")
    }
    return (
        <form className='search-container' action='/' onSubmit={searchSubmitHandle}>
            <input
                type='text'
                placeholder='Search'
                value={QInput}
                onChange={(e) => setQInput(e.target.value)}
            />
            <button type='submit'>
                <i className='fa-solid fa-magnifying-glass'></i>
            </button>
        </form>
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