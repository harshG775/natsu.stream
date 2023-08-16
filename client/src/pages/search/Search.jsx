import { useParams } from "react-router-dom";
import { TMDB } from "../../../modules/fetching";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* Search page */
export default function SearchPage() {
    const params = useParams();
    const query = params.query
    const [queryResult , setQueryResult] = useState([])
    
    useEffect(()=>{
        TMDB.getSearchMulti(query,1).then(d=>setQueryResult(d))
    },[query])
    return (
        <div className='body'>
            <header>
                <h6>Search Result : count</h6>
            </header>
            <main>
                <header>
                    <h6>Search Result Tv Show: count</h6>
                </header>
                {queryResult.results?.map((d,key)=>(
                    <CardItem {...d} mediaType={"tv"} key={key} />
                ))}
                <header>
                    <h6>Search Result movies: count</h6>
                </header>
                {queryResult.results?.map((d,key)=>(
                    <CardItem {...d} mediaType={"movie"} key={key} />
                ))}
            </main>
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
                <Link to={`../overview/${mediaType}/${id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w185${backdrop_path}`}
                        alt=''
                    />
                </Link>
                <div className='meta'>
                    <h6>
                        {title ? (
                            <Link to={`../overview/${mediaType}/${id}`}>{title}</Link>
                        ) : (
                            <Link to={`../overview/${mediaType}/${id}`}>{name}</Link>
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
