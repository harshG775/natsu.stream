import { Link,useNavigate} from "react-router-dom";
import "./navBar.css"
import { useState } from "react";

// navbar
export default function NavBar() {
    return (
        <header className="navbar">
            <div className="maxContainer">
                <Logo/>
                <SearchInput/>
                <NvaLinks/>
            </div>
        </header>
    );
}

function Logo() {
    return (
        <div>
            <Link to={"/"}>Logo</Link>
        </div>
    );
}


function NvaLinks() {
  return (
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/movies"}>Movie</Link></li>
                <li><Link to={"/tvshow"}>Tv Show</Link></li>
                <li><Link to={"/search"}>Search</Link></li>
            </ul>
        </nav>
    )
}

function SearchInput() {
    const [qInput,setQInput] = useState("")
    
    const navigate = useNavigate();
    
    const searchSubmitHandle=(e)=>{
        e.preventDefault()
        if (qInput.trim() !== '') {
            navigate(`/q/${qInput.replace(" ", "+")}`);
        } else {
            console.log('Input is empty. Search not allowed.');
        }
    }
    return (     
        <nav>
            <form action='/' onSubmit={searchSubmitHandle}>
                <input
                    type='text'
                    placeholder='Search'
                    value={qInput}
                    onChange={(e) => setQInput(e.target.value)}
                />
                <button type='submit'>Search</button>
            </form>
        </nav>
    );
}

// function MyInput() {
//     const [Input, setInput] = useState("");
//     return (
//         <input
//             type='text'
//             placeholder='Search'
//             value={Input}
//             onChange={(e) => setInput(e.target.value)}
//         />
//     );
// }
