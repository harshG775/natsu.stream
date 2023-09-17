/* home page */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TMDB } from "../../../modules/fetching";
import CardItem from "../../components/cardItem/CardItem";
import "./home.css"

// import MainCarousel from "./mainCarousel/MainCarousel";
import HomeCarousel from "./homeCarousel/HomeCarousel";
export default function HomePage() {
    return (
        <main className="maxContainer">
            {/* <MainCarousel/> */}
            <HomeCarousel />
            <div className='trending'>
                <h2>movies</h2>
                <PopularMovie />
                <div style={{textAlign:"center"}}><Link to="/tv">view More</Link></div>
                <br />
                <h2>Tv Show</h2>
                <PopularTv />
                <div style={{textAlign:"center"}}><Link to="/tv">view More</Link></div>
            </div>
        </main>
    );
}



/* Popular or top-20 section */
function PopularMovie() {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        TMDB.getPopularPage("movie", 1).then((data) =>
            setTrending(data)
        );
    }, []);

    return (
        <div className="item-container maxContainer">
            {trending.results?.map((d,key)=>(
                <CardItem {...d} contentType={"movie"} key={key} />
            ))}
        </div>
    );
}
/* Popular or top-20 section */
function PopularTv() {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        TMDB.getPopularPage("tv", 1).then((data) =>
            setTrending(data)
        );
    }, []);

    return (
        <div className="item-container maxContainer">
            {trending.results?.map((d,key)=>(
                <CardItem {...d} contentType={"tv"} key={key} />
            ))}
        </div>
    );
}