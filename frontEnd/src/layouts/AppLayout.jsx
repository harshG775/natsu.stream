import "./AppLayout.css"
import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { lazy } from "react";
import SideNavbar from "../components/sideNavbar/SideNavbar";
import TopNavbar from "../pageLayouts/topNavbar/TopNavbar";
import Footer from "../pageLayouts/footer/Footer";
import ThemeToggle from "../components/theme/ThemeToggle";

const LoadingScreen = lazy(() => import("../pageLayouts/loading/LoadingScreen"));

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
            <ThemeToggle/>
            <div className="page">
                <TopNavbar/>
                <Suspense fallback={<LoadingScreen />}>
                    <Outlet />
                </Suspense>
                <Footer/>
            </div>
        </>
    );
}
