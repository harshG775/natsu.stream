/* movies page */
import { useState, useEffect } from "react";
import CardItem from "../../components/cardItem/CardItem";
import Pagination from "../../components/pagination/Pagination";
import "./movies.css";
import { TMDB } from "../../../modules/fetching";
export default function MoviesPage() {
    return (
        <main id='movies' className='maxContainer'>
            <header>
                <h2>Movies</h2>
            </header>
            <Trending />
        </main>
    );
}

function Trending() {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        TMDB.getTrendingPage("movie", 1, "day").then((data) =>
            setTrending(data)
        );
    }, []);
    return (
        <section>
            <h6>Trending</h6>
            <div className='item-container'>
                {trending.results?.map((e, key) => (
                    <CardItem {...e} contentType={"movie"} key={key} />
                ))}
            </div>
            <Pagination/>
        </section>
    );
}
