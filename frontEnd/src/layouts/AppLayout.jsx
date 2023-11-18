import "./AppLayout.css"
import { Suspense, useEffect,lazy } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideNavbar from "../pageLayouts/sideNavbar/SideNavbar";
import TopNavbar from "../pageLayouts/topNavbar/TopNavbar";
import Footer from "../pageLayouts/footer/Footer";
import ThemeToggle from "../components/theme/ThemeToggle";
import LoadingScreen from "../pageLayouts/loading/LoadingScreen";


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
            <SideNavbar/>
            <Suspense fallback={<LoadingScreen />}>
                <ThemeToggle/>
                <div className="page">
                    <TopNavbar/>
                        <main><Outlet /></main>
                    <Footer/>
                </div>
            </Suspense>
        </>
    );
}
