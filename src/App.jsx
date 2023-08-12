// import { useState ,useEffect} from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./App.css";

// import { TMDB } from "../modules/fetching";
// import CardItem from "./components/cardItem/CardItem";
export default function App() {
    return (
        <>
        <PageRoutes />
        </>
    );
}

// navbar
function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={"/home"}>Home</Link>
                        <Link to={"/movies"}>Movie</Link>
                        <Link to={"/tvshow"}>Tv Show</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
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
        </BrowserRouter>
    );
}

/* pages */
/* home page */
function HomePage() {
    return (
        <div>
            <header>
                <h2>Home</h2>
                <div className="carousel">Carousel</div>
            </header>
            <main>
                <h2>movies</h2>
            </main>
        </div>
    );
}
/* movies page */
function MoviesPage() {
    return (
        <div>
            <header>
                <h2>Movies</h2>
                <div className="carousel">Carousel</div>
            </header>
            <main>

            </main>
        </div>
    );
}
/* Tv SHow page */
function TvShowPage() {
    return (
        <div>
            <header>
                <h2>Tv Show</h2>
                <div className="carousel">Carousel</div>
            </header>
            <main>

            </main>
        </div>
    );
}
/* Search page */
function SearchPage() {
    return (
        <div>
            <header>
                <h2>Search</h2>
                <div className="carousel">Search input</div>
            </header>
            <main>

            </main>
        </div>
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

// function Item(prop) {
//     const { backdrop_path, first_air_date, name,title ,origin_country,vote_average} = prop;
//     return (
//         <div className='item'>
//             <div className='item-inner'>
//                 <Link to={`/overview/${name}`}>
//                     <img
//                         src={`https://image.tmdb.org/t/p/w342${backdrop_path}`}
//                         alt=''
//                     />
//                 </Link>
//                 <div className='meta'>
//                     <h6>
//                         {title ? (
//                             <Link to={`/overview/${title}`}>{title}</Link>
//                         ) : (
//                             <Link to={`/overview/${name}`}>{name}</Link>
//                         )}
//                     </h6>
//                     <div>
//                         <span>{first_air_date?.replace("-", " ")}</span>
//                         <br />
//                         <span>Rating: {vote_average}</span>
//                         <br />
//                         <span>Country: {origin_country}</span>
//                     </div>
//                 </div>
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
