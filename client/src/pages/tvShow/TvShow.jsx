/* Tv SHow page */
import { useEffect,useState } from "react";

import CarouselMini from "../../components/carouselMini/CarouselMini";
import { TMDB } from "../../../modules/fetching";

export default function TvShowPage() {
    const [nowPlaying, setNowPlaying] = useState();
    useEffect(() => {
        
        TMDB.getTrendingPage("tv", 1,"day").then(resp=>{
            setNowPlaying(resp)
        })
    }, []);
    return (
        <>
            <CarouselMini nowPlaying={nowPlaying} contentType={"tv"} />
            <main id='movies' className='maxContainer'></main>
        </>
    );
}

