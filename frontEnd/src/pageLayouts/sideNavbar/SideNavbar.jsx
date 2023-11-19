import "./sideNavbar.css"
import { Link } from "react-router-dom";
import {Icon} from "@iconify/react"
import { useState } from "react";
const sideNavbarLinks=[
    {
        labelIcon:"clarity:home-line",
        label:"Home",
        linkTo:"/",
    },
    {
        labelIcon:"iconamoon:discover-bold",
        label:"Discover",
        linkTo:"/discover",
    },
    {
        labelIcon:"ri:movie-line",
        label:"Movie",
        linkTo:"/movies",
    },
    {
        labelIcon:"lucide:tv",
        label:"Tv Show",
        linkTo:"/tv-shows",
    },
    {
        labelIcon:"mingcute:settings-6-fill",
        label:"Settings",
        linkTo:"/settings",
    },
]

export default function SideNavbar() {
    const [isActivePageLink,setIsActivePageLink] =useState(0)
    const handleIsActive=(e)=>{
        setIsActivePageLink(e)
    }
    return (
        <nav className='side-navbar'>
            {sideNavbarLinks.map((el,i)=>(
                <SideNavbarLink key={i} {...el} handleIsActive={handleIsActive} isActivePageLink={isActivePageLink} id={i} />
            ))}
        </nav>
    );
}


function SideNavbarLink(prop) {
    const {label,labelIcon,linkTo,handleIsActive,id,isActivePageLink} = prop
    return (
        <Link {...prop} to={linkTo} id={isActivePageLink===id?"active":""} onClick={()=>handleIsActive(id)}>
            <span>
                <Icon style={{height:"1.8rem",width:"2rem"}} icon={labelIcon} />
            </span>
            <span>{label}</span>
        </Link>
	);
}

