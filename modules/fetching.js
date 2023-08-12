"use strict";
import myFetch from "./myFetch";

const apiKey = "c04c4d588ea04e1542849e5b03feadc9";
const basUrl = "https://api.themoviedb.org/3";
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDRjNGQ1ODhlYTA0ZTE1NDI4NDllNWIwM2ZlYWRjOSIsInN1YiI6IjYyMzg2NDQ2OWVlMGVmMDA0NmRhNTA0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dA1jUv8T1T3u9rACdp3RAvs7FnAWVYM7HTDbIvqEmqg",
    },
};

// ////////////
export const TMDB = {
        getTrendingPage: async function (mediaType, pageNumb = 1, time = "day") {
            const url = `${basUrl}/trending/${mediaType}/${time}?api_key=${apiKey}&page=${pageNumb}`;
            return await myFetch(url, options);
        },
        getPopularPage: async function (mediaType, pageNumb = 1) {
            const url = `${basUrl}/${mediaType}/popular?api_key=${apiKey}&page=${pageNumb}`;
            return await myFetch(url, options);
        },
        getTopRated: async function (mediaType, pageNumb = 1) {
            const url = `${basUrl}/${mediaType}/top_rated?api_key=${apiKey}&page=${pageNumb}`;
            return await myFetch(url, options);
        },


        // 
        /* More Movie/TVShow Details by id */
        getDetailsById: async function (mediaType, movie_id) {
            const url = `${basUrl}/${mediaType}/${movie_id}?api_key=${apiKey}`;
            return await myFetch(url, options);
        },
        /* Movie and Tv show Cast and Crew */
        getCastAndCrew: async function (mediaType, movie_id) {
            const url = `${basUrl}/${mediaType}/${movie_id}/credits?api_key=${apiKey}`;
            return await myFetch(url, options);
        },
        /* Fetch a list of movies similar to a specific movie */
        getSimilar: async function (mediaType, movie_id, pageNumb = 1) {
            const url = `${basUrl}/${mediaType}/${movie_id}/similar?api_key=${apiKey}&page=${pageNumb}`;
            return await myFetch(url, options);
        },
        /* Fetch recommended movies based on a given movie. */
        getRecommendations: async function (mediaType, movie_id) {
            const url = `${basUrl}/${mediaType}/${movie_id}/recommendations?api_key=${apiKey}`;
            return await myFetch(url, options);
        },

        /* Search Movie/TVShow */
        getSearch: async function (mediaType,pageNumb = 1,query,language = "en-US") {
            const url = `${basUrl}/search/${mediaType}?api_key=${apiKey}&page=${pageNumb}&query=${query}&language=${language}`;
            return await myFetch(url, options);
        },
        /* get Genre Lists */
        getGenreLists: async function (mediaType, query) {
            const url = `${basUrl}/genre/${mediaType}/list?api_key=${apiKey}&query=${query}`;
            return await myFetch(url, options);
        },

        /* get Movie trailer Videos or clip */
        getVideosTrailers: async function (mediaType, id) {
            const url = `${basUrl}/${mediaType}/${id}/videos?api_key=${apiKey}`;
            return await myFetch(url, options);
        },
        /* Search multi Movie and TVShow and anime and k drama etc. */
        getSearchMulti: async function (query,pageNumb = 1,language = "en-US") {
            const url = `${basUrl}/search/multi?api_key=${apiKey}&page=${pageNumb}&query=${query}&language=${language}`;
            return await myFetch(url, options);
        },



    tv: {
        /* Fetch Season Details */
        getSeason: async function (tv_id, season_number) {
            const url = `${basUrl}/tv/${tv_id}/season/${season_number}?api_key=${apiKey}`;
            return await myFetch(url, options);
        },
        /* Fetch Episode Details */
        getEpisode: async function (tv_id, season_number, episode_number) {
            const url = `${basUrl}/tv/${tv_id}/season/${season_number}/episode/${episode_number}?api_key=${apiKey}`;
            return await myFetch(url, options);
        },
    },
    movie: {
        getNowPlayingPage: async function (pageNumb = 1) {
            const url = `${basUrl}/movie/now_playing?api_key=${apiKey}&page=${pageNumb}`;
            return await myFetch(url, options);
        },
        getUpcomingPage: async function (pageNumb = 1) {
            const url = `${basUrl}/movie/upcoming?api_key=${apiKey}&page=${pageNumb}`;
            return await myFetch(url, options);
        },

        //
    }
};
