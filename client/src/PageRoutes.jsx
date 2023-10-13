import { Routes,Route, } from "react-router-dom";

import HomePage from "./pages/home/Home";
import MoviesPage from "./pages/movies/Movies";
import TvShowPage from "./pages/tvShow/TvShow";
import UserPage from "./pages/user/User";

import SearchPage from "./pages/search/Search";
import AboutPage from "./pages/about/About";
// import Content from "./pages/content/Content";

export default function PageRoutes() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/discover' element={"<MoviesPage />"} />
				<Route path='/movie' element={<MoviesPage />} />
				<Route path='/tv' element={<TvShowPage />} />
				<Route path='/user' element={<UserPage />} />
                
				<Route path='/search' element={<SearchPage />} />
				<Route path='search/q/:query' element={<SearchPage />} />
				<Route path='search/q/' element={<SearchPage />} />

				<Route path='/:contentType/about/:id' element={<AboutPage />} />
				{/* <Route path='/:content/:id' element={<Content />} />
                <Route path='/:content/:id' element={<Content />} /> */}
                
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
}


function ErrorPage() {
    return <div style={{ height: "50vh" ,display:"grid",placeContent:"center"}}>404 Error</div>;
}
