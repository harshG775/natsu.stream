/* movies page */
import { useState, useEffect } from "react";
import CardItem from "../../components/cardItem/CardItem";
import NavPagination from "../../components/navPagination/NavPagination";
import "./movies.css";
import { TMDB } from "../../../modules/fetching";

import CarouselMini from "../../components/carouselMini/CarouselMini";

export default function MoviesPage() {
    const [nowPlaying, setNowPlaying] = useState();
    useEffect(() => {
        TMDB.movie.getNowPlayingPage().then(resp=>{
            setNowPlaying(resp)
        })
    }, []);
    return (
        <>
            <CarouselMini nowPlaying={nowPlaying} contentType={"movie"} />
            <main id='movies' className='maxContainer'>
                <Trending />
            </main>
        </>
    );
}





function Trending() {
    const [trending, setTrending] = useState([]);
    const [pageNumber,setPageNumber] = useState(1)
    useEffect(() => {
        TMDB.getTrendingPage("movie", pageNumber, "day").then((data) =>
            setTrending(data)
        );
    }, [pageNumber]);
    return (
        <section>

            <h1>Trending</h1>
            <div className='item-container'>
                {trending.results?.map((e, key) => (
                    <CardItem {...e} contentType={"movie"} key={key} />
                    ))}
            </div>
            <NavPagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={trending?.total_pages} />
        </section>
    );
}
