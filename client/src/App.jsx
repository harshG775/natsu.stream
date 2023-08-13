import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/home/Home";
import TvShowPage from "./pages/tvShow/TvShow";
import MoviesPage from "./pages/movies/Movies";
import SearchPage from "./pages/search/Search";

import Footer from "./components/footer/Footer";
import "./App.css";

export default function App() {
    return (
        <>
        <PageRoutes />
        <SearchPage/>

        </>
    );
}

// navbar
function NavBar() {
    return (
        <header>
            <nav>
                <div><Link to={"/home"}>Logo</Link></div>
                <ul>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/movies"}>Movie</Link></li>
                    <li><Link to={"/tvshow"}>Tv Show</Link></li>
                    <li><Link to={"/search"}>Search</Link></li>
                </ul>
            </nav>
        </header>
    );
}

// pages routes
function PageRoutes() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage />} />

                <Route path='/home' element={<HomePage />} />
                <Route path='/movies' element={<MoviesPage />} />
                <Route path='/tvshow' element={<TvShowPage />} />
                <Route path='/search' element={<SearchPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}




// fetching section

// function PageSection (prop) {
//     const {sectionTitle, sectionToFetch, mediaType, pageNumb} = prop

//     const [apiData, setApiData] = useState()
//     useEffect(()=>{
//         TMDB[mediaType][sectionToFetch](pageNumb).then(data=>setApiData(data))

//     },[setApiData, mediaType, sectionToFetch, pageNumb])
//     console.log(apiData)
//     return (
//         <div>
//             <h4>{sectionTitle}</h4>
//             <div className="item-container">
//                     {/* {apiData?.results?.map((itemData,key)=>(
//                         <Item {...itemData} key={key} />
//                     ))} */}
//                         <Item {...apiData?.results[0]}/>
//             </div>
//         </div>
//     );
// }


// function NavBar() {

//     const [searchQuery,setSearchQuery] = useState("")
//     const [mediaId,setMediaId] = useState("")
//     const srcUrl= `https://vidsrc.to/embed/tv/${mediaId}`

//     const queryHandler = async (e)=>{
//         e.preventDefault()
//         const query = searchQuery.replace(" ","-")
//         TMDB.getSearch("tv",1,query).then( (d)=>setMediaId(d.results[0].id) )

//         TMDB.getSearch("tv",1,query).then( (d)=>console.log(d.results) )
//     }
//     return (
//         <div className="navbar-outer">
//             <nav className="maxContainer">
//                 <div><a href="/">LOGO</a></div>
//                 <form action="/" onSubmit={(d)=>queryHandler(d)}>
//                     <input
//                         type="text"
//                         placeholder="Search"
//                         value={searchQuery}
//                         onChange={(e)=>setSearchQuery(e.target.value)}
//                     />
//                     <button type="submit">Search</button>
//                 </form>
//                 <ul>
//                     <li><a href="/Home">Home</a></li>
//                     <li><a href="/Movies">Movies</a></li>
//                     <li><a href="/TvShow">Tv Show</a></li>
//                     <li><a href="/Update">Update</a></li>
//                 </ul>
//             </nav>
//             <div className="card-items-outer maxContainer">
//                 <CardItemsContainer
//                     contentType={"tv"}
//                     page={1}
//                     time={"day"}
//                 />
//             </div>
//         </div>
//     );
// }

// function CardItemsContainer(prop) {
//     const {contentType, page, time}=prop
//     const [tvCardData, setTvCardData] = useState([]);

//     useEffect(() => {
//         TMDB.getTrendingPage(contentType, page, time)
//         .then(resp=> setTvCardData(resp));
//     }, []);

//     return (
//         <>
//         <div className='card-items'>
//             {tvCardData.results?.map((e, key) => (
//                 <CardItem cardData={e} key={key} />
//             ))}
//         </div>
//         </>
//     );
// }
