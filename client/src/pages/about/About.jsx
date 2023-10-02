import "./about.css";
import { useState,useEffect } from "react";
import { TMDB } from "../../../modules/fetching";
import { useParams} from "react-router-dom";

export default function AboutPage() {
    const urlParams = useParams()
    const [apiData,setApiData]=useState()

    useEffect(()=>{
        TMDB.getDetailsById(urlParams.contentType,urlParams.id)
        .then(d=>setApiData(d))
    },[urlParams])
    console.log(apiData)
	return (
		<main id="about">
            <div className="backdrop"
                style={{
                                    backgroundImage:`
                                    linear-gradient(to bottom,#14151990,#14151990), 
                                    url(https://image.tmdb.org/t/p/original/${apiData?.backdrop_path})`,
                }}
            >
                <div className="info maxContainer">
                    <img className="poster" src={`https://image.tmdb.org/t/p/w500/${apiData?.poster_path}`} alt="" />
                    <div>
                        <button>watch</button>
                        <button>add</button>
                    </div>
                    <ul>
                        <li>Score:{apiData?.vote_average}</li>
                        <li>Rank:</li>
                        <li>Season:{apiData?.number_of_seasons}</li>
                        <li>Episodes:{apiData?.number_of_episode}</li>
                        <li>Genres:{apiData?.genres}</li>
                        <li>Released:{apiData?.first_air_date}</li>
                        {/*<li>Rating:{apiData?.}</li>
                        <li>Duration:{apiData?.}</li>
                        <li>Status:{apiData?.}</li>
                        <li>Broadcast:{apiData?.}</li>
                        <li>Source:{apiData?.}</li>
                        <li>Studios:{apiData?.}</li> */}
                    </ul>
                    <h1>{apiData?.name?apiData?.name:apiData?.title}</h1>
                    <h6>original Title: {apiData?.original_title}</h6>
                    <p>{apiData?.overview}</p>
                    <div>Release Date {apiData?.release_date}</div>
                    <div>RunTime:<i>{apiData?.runtime} min</i> </div>
                </div>
            </div>

            <section>
                
            </section>
		</main>
	);
}