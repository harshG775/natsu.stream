import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./carouselMini.css";
import { VideScr } from "../../../modules/fetching";

export default function CarouselMini() {
    // const [newRelease, setNewRelease] = useState([]);
    useEffect(() => {
        VideScr.getNewRelease("tv").then(data=>{
            console.log(data)
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
                <SwiperSlide>
                    <Item />
                </SwiperSlide>
                <SwiperSlide>
                    <Item />
                </SwiperSlide>
                <SwiperSlide>
                    <Item />
                </SwiperSlide>
                <SwiperSlide>
                    <Item />
                </SwiperSlide>
                <SwiperSlide>
                    <Item />
                </SwiperSlide>
                <SwiperSlide>
                    <Item />
                </SwiperSlide>
                <SwiperSlide>
                    <Item />
                </SwiperSlide>
                <SwiperSlide>
                    <Item />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

function Item() {
    const prop = {
        id: "68528",
        contentType: "movie",
    };
    return (
        <>
            <div
                className='poster'
                style={{
                    backgroundImage:
                        "url('https://static.bunnycdn.ru/i/cache/images/7/7f/7f2b81ac4c26647375f9c797876254db.jpg-w1024')",
                }}
            ></div>
            <div className='info'>
                <a
                    href={`../overview/${prop.contentType}/${prop.id}`}
                    className='title'
                >
                    TITLE
                </a>
                <div className='metadata'>
                    <div className='begin'>
                        <span className='dot'>
                            <i className='bi bi-star-fill'></i> 6.1
                        </span>
                        <span className='dot'>2023</span>
                        <span className='dot'>103 min</span>
                    </div>
                    <div className='stop'>
                        <span className='quality'>HD</span>
                        <span className='rating'>PG-13</span>
                    </div>
                </div>
                <div className='action d-flex'>
                    <div className='watch-now'>
                        <a href={`../overview/${prop.contentType}/${prop.id}`}>
                            Watch Now
                        </a>
                    </div>
                    <div className='drop-pup' data-id='68528'>
                        <button className='dropdown'>Add To List</button>
                        <div className='dropdown-menu folders'></div>
                    </div>
                </div>
            </div>
        </>
    );
}
