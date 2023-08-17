import { useParams } from "react-router-dom";
import { TMDB } from "../../../modules/fetching";
import { useEffect, useState } from "react";
import CardItem from "../../components/cardItem/CardItem"
/* Search page */

export default function SearchPage() {
    const params = useParams();
    const query = params.query

    return (
        <div className='body'>
            <main>
                <header>
                    <h1>Search Result movies: count</h1>
                </header>
                <SearchResult query={query} contentType={"movie"} />
                <header>
                    <h1>Search Result tv: count</h1>
                </header>
                <SearchResult query={query} contentType={"tv"} />
            </main>
        </div>
    );
}


function SearchResult(prop) {
    const {query,contentType}= prop
    const [queryResult , setQueryResult] = useState([])
    useEffect(()=>{
        TMDB.getSearch (contentType,1,query,"en-US").then(d=>setQueryResult(d))
        
    },[contentType,query])
    return (
        <>
            {queryResult.results?.map((d, key) => (
                <CardItem {...d} contentType={contentType} key={key} />
            ))}
        </>
    );
}
