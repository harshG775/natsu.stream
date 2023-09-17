import { useEffect,useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './mainCarousel.css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { TMDB } from '../../../../modules/fetching';
import CarouselItem from './carouselItem/CarouselItem';

export default function MainCarousel() {

  const [trending, setTrending] = useState([]);
  useEffect(() => {
      TMDB.getTrendingPage("movie", 1, "day").then((data) =>
          setTrending(data)
      );
  }, []);
  console.log(trending)
  return (
    <>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}
            navigation={false}
            
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
        >
            {trending.results?.map((d, key) => (
                <SwiperSlide className='main-item' key={key}>
                    <CarouselItem {...d} />
                </SwiperSlide>
            ))}
        </Swiper>
    </>
  );
}