import { Link } from "react-router-dom";

import "./cardItem.css"
export default function CardItem(prop) {
    const {
        contentType,
        backdrop_path,id,title,name,first_air_date,release_date,
        vote_average} = prop;

    return (
        <div className='item'>
            <div className='item-inner'>
                <Link to={`../overview/${contentType}/${id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                        alt=''
                    />
                </Link>
                <div className='meta'>
                    <h4>
                        <Link to={`../overview/${contentType}/${id}`}>
                            {title ? title:name}
                        </Link>
                    </h4>
                    <div>
                        <span className="ratting">⭐{vote_average}</span>
                        <span>
                            {first_air_date ? first_air_date:release_date }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
