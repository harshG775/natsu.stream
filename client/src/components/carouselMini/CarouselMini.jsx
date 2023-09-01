import {useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./carouselMini.css";
import { TMDB } from "../../../modules/fetching";

export default function CarouselMini() {
    const [nowPlaying, setNowPlaying] = useState();
    useEffect(() => {
        TMDB.movie.getNowPlayingPage().then(resp=>{
            setNowPlaying(resp)
        })
    }, []);
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
                            <Item {...e} contentType={"movie"}/>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

function Item(prop) {
    console.log(prop)
    return (
        <>
            <div
                className='poster'
                style={{
                    backgroundImage:`url('https://image.tmdb.org/t/p/w500${prop.poster_path}')`,
                }}
            ></div>
            <div className='info'>
                <a
                    className='title'
                    href={`../overview/${prop.contentType}/${prop.id}`}
                >
                    {prop.title?prop.title:prop.original_title}
                </a>
                <div className='metadata'>
                    <div className='begin'>
                        <span className='dot'>
                            <i className="fa-solid fa-star" style={{color:"#ffe568"}} ></i> {prop.vote_average}
                        </span>
                        <span className='dot'>{prop.release_date}</span>
                        <span className='dot'>103 min</span>
                    </div>
                    <div className='stop'>
                        <span className='quality'>HD</span>
                        <span className='rating'>PG-13</span>
                    </div>
                </div>
                <div className='popup'>
                    <a className='watch-now' href={`../${prop.contentType}/${prop.id}`}>
                        Watch Now
                    </a>
                    <button className='add-to-list'>Add To List</button>
                </div>
            </div>
        </>
    );
}
