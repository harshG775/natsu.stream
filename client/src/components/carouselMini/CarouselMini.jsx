import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./carouselMini.css";
export default function CarouselMini(prop) {
    const {nowPlaying,contentType}=prop
    return (
        <div id='CarouselMini'>
            <Swiper
                className='maxContainer'
                slidesPerView={3}
                spaceBetween={50}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
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
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                    
                    {nowPlaying?.results.map((e,i)=>(
                        <SwiperSlide key={i}>
                            <Item {...e} contentType={contentType}/>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

function Item(prop) {
    const {
        backdrop_path,poster_path,contentType,id,title,first_air_date,
        name,vote_average,release_date,adult,
    } = prop;
    return (
        <>
            <style>
            {`
                #CarouselMini .poster${id} {
                    background-image:url('https://image.tmdb.org/t/p/w780${poster_path}');
                }
                @media (max-width:768px) {
                    #CarouselMini .poster${id} {
                        background-image:url('https://image.tmdb.org/t/p/w780${backdrop_path}') !important;
                    }
                }
            
            `}
            </style>
            <div className={`poster poster${id}`}></div>
            <div className='info'>
                <Link className='title' to={`../${contentType}/${id}`}>
                    {title ? title : name}
                </Link>
                <div className='metadata'>
                    <div className='begin'>
                        <span className='dot'>
                            <i className='fa-solid fa-star' style={{ color: "#ffe568" }}></i>
                            {vote_average}
                        </span>
                        <span className='dot'>{first_air_date?first_air_date:release_date}</span>
                        <span className='dot'>{prop.contentType}</span>
                    </div>
                    <div className='stop'>
                        <b className='dot'>{prop.original_language}</b>
                        <span className='quality'>HD</span>
                        <span className='rating'>{adult?18:""}</span>
                    </div>
                </div>
                <div className='popup'>
                    <Link className='watch-now' to={`../${contentType}/${id}`}>
                        Watch Now
                    </Link>
                    <button className='add-to-list'>Add To List</button>
                </div>
            </div>
        </>
    );
}
