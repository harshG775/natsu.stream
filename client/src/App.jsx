import { BrowserRouter} from "react-router-dom";

// import MainBody from "./components/mainBody/MainBody";

import TopNavBar from "./components/navBar/topbar/TopBar";
import SideNavBar from "./components/navBar/sidebar/SideBar";
// import Footer from "./components/footer/Footer";
import PageRoutes from "./PageRoutes";

import "./App.css";
export default function App() {
    return (
        <BrowserRouter>
            <SideNavBar />
            {/* <MainBody> */}
                <TopNavBar/>
                <PageRoutes />
                {/* <Footer /> */}
            {/* </MainBody> */}
            
        </BrowserRouter>
    );
}

