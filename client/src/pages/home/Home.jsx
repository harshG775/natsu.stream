/* home page */
import { useEffect, useState } from "react";
import { TMDB } from "../../../modules/fetching";
import CardItem from "../../components/cardItem/CardItem";
import "./home.css"

export default function HomePage() {
    return (
        <div className='body'>
            <header>
                <Hero/>
            </header>
            <main>
                <h2>movies</h2>
                <div className='trending'>
                    <Popular />
                </div>
            </main>
        </div>
    );
}



/* sections */
/* hero section */
function Hero() {
    return (
        <div className='carousel'>
            <Trending />
        </div>
    );
}
/* Trending or top-20 section */
function Trending() {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        TMDB.getTrendingPage("movie", 1, "day").then((data) =>
            setTrending(data)
        );
    }, []);

    return (
        <div>
            {/* <CardItem {...trending?.results}/> */}
            {trending.results?.map((d,key)=>(
                <CardItem {...d} contentType={"movie"} key={key} />
            ))}
        </div>
    );
}


/* Popular or top-20 section */
function Popular() {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        TMDB.getPopularPage("movie", 1).then((data) =>
            setTrending(data)
        );
    }, []);

    return (
        <div className="item-container maxContainer">
            {/* <CardItem {...trending?.results}/> */}
            {trending.results?.map((d,key)=>(
                <CardItem {...d} contentType={"movie"} key={key} />
            ))}
        </div>
    );
}