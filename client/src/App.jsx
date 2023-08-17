import { BrowserRouter,Routes, Route} from "react-router-dom";
import HomePage from "./pages/home/Home";
import TvShowPage from "./pages/tvShow/TvShow";
import MoviesPage from "./pages/movies/Movies";
import SearchPage from "./pages/search/Search";

import Content from "./pages/content/Content";

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import "./App.css";

export default function App() {
    return (
        <>
            <PageRoutes />
        </>
    );
}

// pages routes
function PageRoutes() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />

                    <Route path='/movies' element={<MoviesPage />} />
                    <Route path='/tvshow' element={<TvShowPage />} />
                    <Route path='/search' element={<SearchPage />} />

                {/* </Routes>

                <Routes> */}
                    <Route path='overview/:content/:id' element={<Content />} />
                    <Route path='q/:query' element={<SearchPage/>} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}


function ErrorPage() {
  return <div>404 Error</div>;
}



// function ThemeToggle() {
//   return <div>ThemeToggle</div>;
// }
