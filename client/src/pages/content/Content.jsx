/* eslint-disable react/no-unknown-property */
/* Tv SHow page */
import { useParams} from "react-router-dom";
import { TMDB } from "../../../modules/fetching";
import { useEffect, useState } from "react";

export default function Content() {
    const urlParams = useParams()
    const [apiData,setApiData]=useState()

    useEffect(()=>{
        TMDB.getDetailsById(urlParams.content,urlParams.id)
        .then(d=>setApiData(d))
    },[urlParams])
    console.log(apiData)

    return (
        <div className='body'>
            <header>
                <h2>Content</h2>
            </header>
            <main>
                <div className="overview">
                    <h1 className="title">
                        {apiData?.title? apiData?.title : apiData?.original_title}
                    </h1>
                    <img src={`https://image.tmdb.org/t/p/w500${apiData?.poster_path}`} alt="" width={"250px"}/>
                    <p className="overview">
                        {apiData?.overview}
                    </p>
                    
                </div>
                <div className="player">
                    <Player content={urlParams?.content} id={urlParams?.id} />
                </div>
            </main>
        </div>
    );
}


function Player(prop) {
    const {content,id} = prop
    return (
        <iframe
            width='560'
            height='315'
            src={`https://vidsrc.to/embed/${content}/${id}`}
            title='YouTube video player'
            // eslint-disable-next-line react/no-unknown-property
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            
            
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
    );
}


// "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
// "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
// "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"