/* home page */
import { useEffect, useState } from "react";
import { TMDB } from "../../../modules/fetching";
import CardItem from "../../components/cardItem/CardItem";
import "./home.css"

import MainCarousel from "./mainCarousel/MainCarousel";
export default function HomePage() {
    return (
        <div className='body maxContainer'>
            <MainCarousel/>
            <div className='trending'>
                <h2>movies</h2>
                <Popular />
            </div>
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