import { useState } from "react";
import "./searchBar.css"
import {Icon} from "@iconify/react"
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [QInput,setQInput] =useState("")
    const navigate = useNavigate();
    
    const searchSubmitHandle=(e)=>{
        e.preventDefault()
        if (QInput.trim() !== "") {
            navigate(`search/q/${QInput.replace(" ", "+")}`);
        } else {
            console.log("Input is empty. Search not allowed.");
        }
        setQInput("")
    }
	return (
        <>
        <form className="search-container" action="/" onSubmit={searchSubmitHandle}>
            <input
                type="text"
                placeholder="Search"
                value={QInput}
                onChange={(e) => setQInput(e.target.value)}
            />
            <button type="submit">
                <Icon icon="ri:search-line" /> 
            </button>
        </form>
        </>
	);
}
