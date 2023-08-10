"use strict";
import myFetch from "./myFetch";
const apiKey = "c04c4d588ea04e1542849e5b03feadc9";
// //
export const TMDB = {
    /* homepage and all sections  Trending Popular Upcoming NowPlaying */
    getTrendingPage: async function (mediaType, pageNumb, time) {
        return await myFetch(`https://api.themoviedb.org/3/trending/${mediaType}/${time}?api_key=${apiKey}&page=${pageNumb}
        `);
    },
    getPopularPage: async function (mediaType, pageNumb) {
        return await myFetch(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=${apiKey}&page=${pageNumb}
        `);
    },
    getUpcomingPage: async function (mediaType, pageNumb) {
        return await myFetch(`https://api.themoviedb.org/3/${mediaType}/upcoming?api_key=${apiKey}&page=${pageNumb}
        `);
    },
    getNowPlayingPage: async function (mediaType, pageNumb) {
        return await myFetch(`https://api.themoviedb.org/3/${mediaType}/now_playing?api_key=${apiKey}&page=${pageNumb}
        `);
    },
    /* More Movie/TVShow Details by id */
    getDetailsById: async function (mediaType, id) {
        return await myFetch(
            `https://api.themoviedb.org/3/${mediaType}/${id}?=${apiKey}`
        );
    },

    /* Search Movie/TVShow */
    getSearch: async function (mediaType, pageNumb, query) {
        return await myFetch(`https://api.themoviedb.org/3/search/${mediaType}?api_key=${apiKey}&page=${pageNumb}
        &query=${query}
    `);
    },

    /* get Genre Lists */
    getGenreLists: async function (mediaType, pageNumb, query) {
        return await myFetch(`https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=${apiKey}&page=${pageNumb}
        &query=${query}
    `);
    },

    /* get Movie trailer Videos or clip */
    getMovieVideos: async function (mediaType, id) {
        return await myFetch(
            `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${apiKey}`
        );
    },
};
