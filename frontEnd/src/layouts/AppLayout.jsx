import "./AppLayout.css"
import { useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideNavbar from "../pageLayouts/sideNavbar/SideNavbar";
import TopNavbar from "../pageLayouts/topNavbar/TopNavbar";
import Footer from "../pageLayouts/footer/Footer";
import ThemeToggle from "../components/theme/ThemeToggle";


export default function AppLayout() {
    const location = useLocation();

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location]);

    return (
        <>
            <TopNavbar/>
            <SideNavbar/>
            <ThemeToggle/>

            <main id="main">
                <Outlet />
                <Footer/>
            </main>
                    
        </>
    );
}
