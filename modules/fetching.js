"use strict";
import myFetch from "./myFetch";

const apiKey = "c04c4d588ea04e1542849e5b03feadc9";
const basUrl = 'https://api.themoviedb.org/3';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDRjNGQ1ODhlYTA0ZTE1NDI4NDllNWIwM2ZlYWRjOSIsInN1YiI6IjYyMzg2NDQ2OWVlMGVmMDA0NmRhNTA0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dA1jUv8T1T3u9rACdp3RAvs7FnAWVYM7HTDbIvqEmqg'
  }
};

// ////////////
export const TMDB = {
    tv:{
        getTrendingPage: async function (pageNumb=1, time="day") {
            return await myFetch(
                `${basUrl}/trending/tv/${time}?api_key=${apiKey}&page=${pageNumb}`
                ,options
            );
        },
        getPopularPage: async function (pageNumb=1) {
            return await myFetch(
                `${basUrl}/tv/popular?api_key=${apiKey}&page=${pageNumb}`
                ,options
            );
        },

        // 
        /* More TVShow Details by id */
        getDetailsById: async function (id) {
            return await myFetch(
                `${basUrl}/tv/${id}?api_key=${apiKey}`
                ,options
            );
        },
        /* Fetch Season Details */
        getSeason: async function (tv_id, season_number) {
            return await myFetch(
                `${basUrl}/tv/${tv_id}/season/${season_number}?api_key=${apiKey}`
                ,options
            );
        },
        /* Fetch Episode Details */
        getEpisode: async function (tv_id, season_number, episode_number) {
            return await myFetch(
                `${basUrl}/tv/${tv_id}/season/${season_number}/episode/${episode_number}?api_key=${apiKey}`
                ,options
            );
        },
        getCastAndCrew: async function (id) {
            return await myFetch(
                `${basUrl}/tv/${id}/credits?api_key=${apiKey}`
                ,options
            );
        },

    },
    movie:{
        getTrendingPage: async function (pageNumb=1, time="day") {
            return await myFetch(
                `${basUrl}/trending/movie/${time}?api_key=${apiKey}&page=${pageNumb}`
                ,options
            );
        },
        getPopularPage: async function (pageNumb=1) {
            return await myFetch(
                `${basUrl}/movie/popular?api_key=${apiKey}&page=${pageNumb}`
                ,options
            );
        },
        getUpcomingPage: async function (pageNumb=1) {
            return await myFetch(
                `${basUrl}/movie/upcoming?api_key=${apiKey}&page=${pageNumb}`
                ,options
            );
        },
        getNowPlayingPage: async function ( pageNumb=1) {
            return await myFetch(
                `${basUrl}/movie/now_playing?api_key=${apiKey}&page=${pageNumb}`
                ,options
            );
        },
        /* More Movie/TVShow Details by id */
        getDetailsById: async function (id) {
            return await myFetch(
                `${basUrl}/tv/${id}?api_key=${apiKey}`
                ,options
            );
        },
        getCastAndCrew: async function (id) {
            return await myFetch(
                `${basUrl}/movie/${id}/credits?api_key=${apiKey}`
                ,options
            );
        },

    },
    multi:{

    },
    
    /* Search Movie/TVShow */
    getSearch: async function (mediaType, pageNumb=1, query,language="en-US") {
        return await myFetch(
            `https://api.themoviedb.org/3/search/${mediaType}?api_key=${apiKey}&page=${pageNumb}&query=${query}&language=${language}`
        );
    },

    /* get Genre Lists */
    getGenreLists: async function (mediaType, pageNumb=1, query) {
        return await myFetch(
            `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=${apiKey}&page=${pageNumb}&query=${query}`
        );
    },

    /* get Movie trailer Videos or clip */
    getMovieVideos: async function (mediaType, id) {
        return await myFetch(
            `https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=${apiKey}`
        );
    },
};
