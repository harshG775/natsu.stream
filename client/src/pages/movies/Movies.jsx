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
    const prop = {
        adult: false,
        backdrop_path: "/9fUu0jwR1V5OJ9M1G4XCDsD4sQz.jpg",
        id: 666277,
        title: "Past Lives",
        original_language: "en",
        original_title: "Past Lives",
        overview: "Two childhood friends are separated after one’s family emigrates from South Korea. Two decades later, they are reunited in New York for one week as they confront notions of destiny, love and the choices that make a life.",
        poster_path: "/rzO71VFu7CpJMfF5TQNMj0d1lSV.jpg",
        media_type: "movie",
        genre_ids: [
            18,
            10749
        ],
        popularity: 75.187,
        release_date: "2023-06-02",
        video: false,
        vote_average: 7.642,
        vote_count: 60
    }
    return (
        <main id="movies">
            <header>
                <h2>Movies</h2>
            </header>
            <div className="item-container">
                {trending.results?.map((e,key)=>(
                    <CardItem {...e}  contentType={"movie"} key={key} />

                ))}
            </div>
        </main>
    );
}