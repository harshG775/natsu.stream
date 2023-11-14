import "./sideNavbar.css"
import { Link } from "react-router-dom";
// import { useState } from "react";
import {Icon} from "@iconify/react"

const sideNavbarLinks=[
    {
        labelIcon:"clarity:home-line",
        label:"Home",
        linkTo:"/",
    },
    {
        labelIcon:"clarity:home-line",
        label:"Discover",
        linkTo:"/discover",
    },
    {
        labelIcon:"clarity:home-line",
        label:"Movie",
        linkTo:"/movies",
    },
    {
        labelIcon:"clarity:home-line",
        label:"Tv Show",
        linkTo:"/tv-shows",
    },
    {
        labelIcon:"clarity:home-line",
        label:"Settings",
        linkTo:"/settings",
    },
]

export default function SideNavbar() {
    // const [isActivePageLink,setIsActivePageLink] =useState(0)
    // const isActiveH=()=>{
    //     return ("active")
    // }
    return (
        <nav className='side-navbar'>
            <ul className="nav-links">
                <li className="nav-logo">
                    <a>
                        <span><i className="fa-solid fa-dragon"></i></span>
                        <span>Dragneel</span>
                    </a>
                </li>
                {sideNavbarLinks.map((el,i)=>(
                    <li key={i} >
                        <SideNavbarLink {...el} />
                    </li>

                ))}
            </ul>
        </nav>
    );
}


function SideNavbarLink(prop) {
    const {label,labelIcon,linkTo} = prop
    return (
        <Link to={linkTo}>
            <span>
                <Icon style={{height:"1.8rem",width:"2rem"}} icon={labelIcon} />
            </span>
            <span>{label}</span>
        </Link>
	);
}
