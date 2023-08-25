/* movies page */
import { useState,useEffect } from "react";
import CardItem from "../../components/cardItem/CardItem";

import "./movies.css"
import {TMDB }from "../../../modules/fetching"
export default function MoviesPage() {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        TMDB.getTrendingPage("movie", 1,"day").then((data) =>
            setTrending(data),
        );
    }, []);
    return (
        <main id="movies" className="maxContainer">
            <header>
                <h2>Movies</h2>
            </header>
            <section className="trending">
                <h6>Trending</h6>
                <div className="item-container">
                    {trending.results?.map((e,key)=>(
                        <CardItem {...e}  contentType={"movie"} key={key} />

                    ))}
                </div>
            </section>
        </main>
    );
}

function Popular() {
  return <div>Popular</div>;
}
