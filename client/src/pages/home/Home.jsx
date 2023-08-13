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
                <CardItem {...d} key={key} />
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
                <CardItem {...d} key={key} />
            ))}
        </div>
    );
}

function CardItem(prop) {
    const { backdrop_path, first_air_date, name,title ,origin_country,vote_average} = prop;
    return (
        <div className='item'>
            <div className='item-inner'>
                <Link to={`/overview/${name}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w185${backdrop_path}`}
                        alt=''
                    />
                </Link>
                <div className='meta'>
                    <h6>
                        {title ? (
                            <Link to={`/overview/${title}`}>{title}</Link>
                        ) : (
                            <Link to={`/overview/${name}`}>{name}</Link>
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
