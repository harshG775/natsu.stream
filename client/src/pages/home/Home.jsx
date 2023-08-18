/* home page */
import { useEffect, useState } from "react";
import { TMDB } from "../../../modules/fetching";
import CardItem from "../../components/cardItem/CardItem";
import "./home.css"

export default function HomePage() {
    return (
        <div className='body'>
            <header>
                <Hero/>
            </header>
            <main>
                <h2>movies</h2>
                <div className='trending'>
                    <Popular />
                </div>
            </main>
        </div>
    );
}

/* sections */
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
/* hero section */
function Hero() {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        TMDB.getTrendingPage("movie", 1, "day").then((data) =>
            setTrending(data)
        );
    }, []);
    console.log(trending)
    return (
        <Swiper
            // modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {trending.results?.map((d,key)=>(
                <SwiperSlide key={key} >
                    <CardItem {...d} contentType={"movie"}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

/* Popular or top-20 section */
function Popular() {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        TMDB.getPopularPage("movie", 1).then((data) =>
            setTrending(data)
        );
    }, []);

    return (
        <div className="item-container maxContainer">
            {/* <CardItem {...trending?.results}/> */}
            {trending.results?.map((d,key)=>(
                <CardItem {...d} contentType={"movie"} key={key} />
            ))}
        </div>
    );
}