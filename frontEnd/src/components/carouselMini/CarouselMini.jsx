import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {Icon} from "@iconify/react"

import "./carouselMini.css";
export default function CarouselMini(prop) {
    const {nowPlaying}=prop
    return (
        <div id="CarouselMini">
            <Swiper
                className="max-w-2xl"
                slidesPerView={3}
                spaceBetween={50}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    769: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                    
                    {nowPlaying?.results.map((e,i)=>(
                        <SwiperSlide key={i}>
                            <Item {...e} contentType={e.media_type}/>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

function Item(prop) {
    const {
		backdrop_path,
		poster_path,
		contentType,
		id,
		title,
		first_air_date,
		name,
		vote_average,
		release_date,
		adult,
	} = prop;
    return (
        <>
            
            <picture className="poster">
                <source media="(max-width:769px)" srcSet={`https://image.tmdb.org/t/p/w780${backdrop_path}`} />
                <img src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt="Flowers"/>
            </picture>
            <div className="info">
                <Link className="title" to={`../${contentType}/about/${id}`}>
                    {title ? title : name}
                </Link>
                <div className="metadata">
                    <div className="begin">
                        <span className="dot">
                            <Icon icon="twemoji:star"/>
                            {vote_average}
                        </span>
                        <span className="dot">{first_air_date?first_air_date:release_date}</span>
                        <span className="dot">{prop.contentType}</span>
                    </div>
                    <div className="stop">
                        <b className="dot">{prop.original_language}</b>
                        <span className="quality">HD</span>
                        <span className="rating">{adult?18:""}</span>
                    </div>
                </div>
                <div className="popup">
                    <Link className="watch-now" to={`../${contentType}/about/${id}`}>
                        Watch Now
                    </Link>
                    <button className="add-to-list">Add To List</button>
                </div>
            </div>
        </>
    );
}
