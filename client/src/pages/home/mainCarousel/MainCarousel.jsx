import { useRef,useEffect,useState} from 'react';
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
import CardItem from '../../../components/cardItem/CardItem';

export default function MainCarousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);


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
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className='mySwiper'
          >
              {trending.results?.map((d, key) => (
                  <SwiperSlide key={key}>
                      <CardItem {...d} contentType={"movie"} />
                  </SwiperSlide>
              ))}
              <div className='autoplay-progress' slot='container-end'>
                  <svg viewBox='0 0 48 48' ref={progressCircle}>
                      <circle cx='24' cy='24' r='20'></circle>
                  </svg>
                  <span ref={progressContent}></span>
              </div>
          </Swiper>
      </>
  );
}
