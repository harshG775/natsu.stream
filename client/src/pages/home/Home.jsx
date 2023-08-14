/* home page */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TMDB } from "../../../modules/fetching";


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
                <CardItem {...d} mediaType={"movie"} key={key} />
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
                <CardItem {...d} mediaType={"movie"} key={key} />
            ))}
        </div>
    );
}




function CardItem(prop) {
    const {
        mediaType,
        backdrop_path,
        id,
        title,
        name,
        first_air_date,
        vote_average,
        origin_country,
    } = prop;

    return (
        <div className='item'>
            <div className='item-inner'>
                <Link to={`https://vidsrc.to/embed/${mediaType}/${id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w185${backdrop_path}`}
                        alt=''
                    />
                </Link>
                <div className='meta'>
                    <h6>
                        {title ? (
                            <Link to={`${mediaType}/overview/${id}`}>{title}</Link>
                        ) : (
                            <Link to={`${mediaType}/overview/${id}`}>{name}</Link>
                        )}
                    </h6>
                    <div>
                        <span>{first_air_date?.replace("-", " ")}</span>
                        <br />
                        <span>Rating: {vote_average}</span>
                        <br />
                        <span>Country: {origin_country}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
