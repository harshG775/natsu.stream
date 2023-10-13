import { BrowserRouter } from "react-router-dom"
import "./App.css"
import PageRoutes from "./PageRoutes"

import SideNavbar from "./layouts/sideNavbar/SideNavbar"

export default function App() {
    return (
        <BrowserRouter>
            <SideNavbar />
            <PageRoutes />
        </BrowserRouter>
    )
}