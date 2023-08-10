import { useState } from "react";
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import "./App.css";
import {getDetailsById,getPage} from "../modules/fetching";

// import NavBar from "./components/navBar/NavBar";
// import Home from "./pages/home/Home";
export default function App() {
    return (
        <NavBar />
        // <BrowserRouter>
        //     <NavBar /> {/* navbar */}
        //     <Routes>

        //         <Route path='/' element={"Home"} />
        //         <Route path='/Home' element={"Home"} />
        //         <Route path='/Trending' element={"Trending"} />
        //         <Route path='/NewRelease' element={"New Release"} />
        //         <Route path='/Update' element={"Update"} />
        //     </Routes>
        //                 {/* Footer */}
        // </BrowserRouter>
    );
}

getPage("tv",2).then((d)=>console.log(d))
getDetailsById("tv",232239).then((d)=>console.log(d))


function NavBar() {
    const [searchQuery,setSearchQuery] = useState("")
    // const [searchResult,setSearchResult] = useState([])

    const queryHandler = async (e)=>{
        e.preventDefault()
        
    }
    return (
        <div className="navbar-outer">
            <nav className="maxContainer">
                <div><a href="/">Logo</a></div>
                <form action="/" onSubmit={(d)=>queryHandler(d)}>
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Trending">Trending</a></li>
                    <li><a href="/Release">Release</a></li>
                    <li><a href="/Update">Update</a></li>
                </ul>
            </nav>
        </div>
    );
}
