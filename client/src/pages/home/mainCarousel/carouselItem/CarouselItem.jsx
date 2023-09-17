import "./carouselItem.css"
import { Link } from "react-router-dom";
export default function CarouselItem(prop) {
    console.log(prop.backdrop_path)
  return (
        <>
            <div className='info'>
                <h2 className='title d-title'>{prop?.title}:{prop?.title}</h2>
                <div className='meta icons'>
                    <i className='rating'>{prop.adult?"18+":""}</i>
                    <i className='quality'>HD</i>
                    <i className='sub fas fa-closed-captioning'></i>
                    <i className='dub fas fa-microphone'></i>
                    <i className='date'>{prop?.release_date}</i>
                </div>
                <div className='synopsis'>
                    {prop?.overview}
                </div>
                <div className='actions'>
                    <Link to={`${"movie"}/about/${prop.id}`} >
                        <i className='fas fa-play'></i> Play now
                    </Link>
                </div>
            </div>
            <div className='image'>
                <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${prop.backdrop_path})`}}></div>
            </div>
        </>
  );
}