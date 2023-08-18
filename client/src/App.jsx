import { BrowserRouter,Routes, Route} from "react-router-dom";

import MainBody from "./mainBody/MainBody";

import HomePage from "./pages/home/Home";
import TvShowPage from "./pages/tvShow/TvShow";
import MoviesPage from "./pages/movies/Movies";
import UserPage from "./pages/user/User";

import SearchPage from "./pages/search/Search";
import Content from "./pages/content/Content";

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <PageRoutes />
        </BrowserRouter>
    );
}

// pages routes
function PageRoutes() {
    return (<>
    
        <MainBody>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/movies' element={<MoviesPage />} />
                <Route path='/tvshow' element={<TvShowPage />} />
                <Route path='/user' element={<UserPage />} />
                {/*  */}
                <Route path='/search' element={<SearchPage />} />
                <Route path='search/q/:query' element={<SearchPage/>} />
                <Route path='search/q/' element={<SearchPage/>} />
                <Route path='overview/:content/:id' element={<Content />} />
                {/*  */}
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </MainBody>
        </>);
}
function ErrorPage() {
    return <div style={{ height: "50vh" ,display:"grid",placeContent:"center"}}>404 Error</div>;
}
