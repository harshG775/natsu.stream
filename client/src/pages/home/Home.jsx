/* home page */
import { useEffect, useState } from "react";
import { TMDB } from "../../../modules/fetching";
import CardItem from "../../components/cardItem/CardItem";
import "./home.css"

import MainCarousel from "./mainCarousel/MainCarousel";
export default function HomePage() {
    return (
        <div className='body'>
            <header>
                <MainCarousel/>
                {/* <Hero/> */}
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

function Hero() {
    const item ={
        adult: false,
        backdrop_path: "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
        id: 976573,
        title: "Elemental",
        original_language: "en",
        original_title: "Elemental",
        overview: "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
        poster_path: "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
        media_type: "movie",
        genre_ids: [
            16,
            35,
            10751,
            14,
            10749
        ],
        popularity: 3354.676,
        release_date: "2023-06-14",
        video: false,
        vote_average: 7.736,
        vote_count: 1028
    }
  return (
      <div>
          <div className='swiper-slide item'>
              <div className='info'>
                  <h2 className='title d-title'>
                      Mushoku Tensei: Jobless Reincarnation Season 2
                  </h2>
                  <div className='meta icons'>
                      <i className='rating'>R</i> <i className='quality'>HD</i>
                      <i className='sub fas fa-closed-captioning'></i>
                      <i className='dub fas fa-microphone'></i>
                      <i className='date'>Jul 10, 2023</i>
                  </div>
                  <div className='synopsis'>
                      Second season of Mushoku Tensei: Isekai Ittara Honki
                      Dasu....
                  </div>
                  <div className='actions'>
                      <a href='/watch/mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2.prwzx' className='btn play btn-primary' >
                          <i className='fas fa-play'></i> Play now
                      </a>
                  </div>
              </div>
              <div className='image'>
                  <div style={`background-image: url(https://image.tmdb.org/t/p/original/${item.backdrop_path});`}></div>
              </div>
          </div>
      </div>
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