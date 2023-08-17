import { Link } from "react-router-dom";
export default function CardItem(prop) {
    const {
        contentType,
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
                <Link to={`../overview/${contentType}/${id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w185${backdrop_path}`}
                        alt=''
                    />
                </Link>
                <div className='meta'>
                    <h6>
                        {title ? (
                            <Link to={`../overview/${contentType}/${id}`}>{title}</Link>
                        ) : (
                            <Link to={`../overview/${contentType}/${id}`}>{name}</Link>
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
