import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./homeCarousel.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { TMDB } from "../../../../modules/fetching";


// import required modules

export default function HomeCarousel() {
	const [trending, setTrending] = useState([]);
	useEffect(() => {
		TMDB.getTrendingPage("movie", 1, "day").then((data) =>
			setTrending(data)
		);
	}, []);
	console.log(trending);
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				// autoplay={{
				// 	delay: 2500,
				// 	disableOnInteraction: false,
				// }}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
                id="home-carousel"
			>
				{trending.results?.map((e,i)=>(
                    <SwiperSlide key={i} style={{borderRadius:"0.5rem",overflow:"hidden"}}>
                        <HomeCarouselItem {...e} contentType={"movie"}/>
                    </SwiperSlide>
                ))}
			</Swiper>
		</>
	);
}

function HomeCarouselItem(prop) {
    const {
        backdrop_path,poster_path,contentType,id,title,first_air_date,
        name,vote_average,release_date,adult,
    } = prop;
    return (
        <>
            <div className="info">
                <Link className='title' to={`../${contentType}/about/${id}`}>
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
                    <Link className='watch-now' to={`../${contentType}/about/${id}`}>
                        Watch Now
                    </Link>
                    <button className='add-to-list'>Add To List</button>
                </div>
            </div>
            <div className={`poster poster${id}`}>
                <div className="img" style={{height:"100%",width:"100%",backgroundImage:`url(https://image.tmdb.org/t/p/w780${backdrop_path})`}}></div>
            </div>
        </>
    );
}
