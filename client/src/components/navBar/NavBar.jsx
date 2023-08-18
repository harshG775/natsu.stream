import "./navBar.css"

import SideNavBar from "./sidebar/SideBar";
import TopNavBar from "./topbar/TopBar";
export default function NavBar() {

    return (
        <header className='navbar'>
            <TopNavBar/>
            <SideNavBar/>
        </header>
    );
}