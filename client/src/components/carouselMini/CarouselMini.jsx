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
        backdrop_path,poster_path,contentType,id,title,
        name,vote_average,release_date,
    } = prop;
    console.log(prop)
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
                <a className='title' href={`../${contentType}/${id}`}>
                    {title ? title : name}
                </a>
                <div className='metadata'>
                    <div className='begin'>
                        <span className='dot'>
                            <i
                                className='fa-solid fa-star'
                                style={{ color: "#ffe568" }}
                            ></i>
                            {vote_average}
                        </span>
                        <span className='dot'>{release_date}</span>
                        <span className='dot'>103 min</span>
                    </div>
                    <div className='stop'>
                        <span className='quality'>HD</span>
                        <span className='rating'>PG-13</span>
                    </div>
                </div>
                <div className='popup'>
                    <a className='watch-now' href={`../${contentType}/${id}`}>
                        Watch Now
                    </a>
                    <button className='add-to-list'>Add To List</button>
                </div>
            </div>
        </>
    );
}
