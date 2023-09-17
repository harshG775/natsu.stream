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
    console.log(apiData?.name)
	return (
		<main id="movies" className="maxContainer">
			<section>
                <img style={{width:"100%"}} src={`https://image.tmdb.org/t/p/original/${apiData?.backdrop_path}`} alt="" />
                <div className="about">
                    <img style={{width:"50%"}} src={`https://image.tmdb.org/t/p/original/${apiData?.poster_path}`} alt="" />
                    <h1>Title: {apiData?.name?apiData?.name:apiData?.title}</h1>
                    <h6>original Title: {apiData?.original_title}</h6>
                    <p>{apiData?.overview}</p>
                    <div>Release Date {apiData?.release_date}</div>
                    <div>RunTime:<i>{apiData?.runtime} min</i> </div>
                </div>
            </section>
		</main>
	);
}