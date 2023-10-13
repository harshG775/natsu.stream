"use strict";
import myFetch from "./myFetch.js";

export default function TMDB() {
    const apiKey = process.env.API_KEY
    const baseUrl = process.env.BASE_URL
    const TMDB = {
		getAllTrendingPage: async function (pageNumb = 1, time = "day") {
			const url = `${baseUrl}/trending/all/${time}?api_key=${apiKey}&page=${pageNumb}`;
			return await myFetch(url, options);
		},
		//
		getTrendingPage: async function (
			mediaType,
			pageNumb = 1,
			time = "day"
		) {
			const url = `${baseUrl}/trending/${mediaType}/${time}?api_key=${apiKey}&page=${pageNumb}`;
			return await myFetch(url, options);
		},
		getPopularPage: async function (mediaType, pageNumb = 1) {
			const url = `${baseUrl}/${mediaType}/popular?api_key=${apiKey}&page=${pageNumb}`;
			return await myFetch(url, options);
		},
		getTopRatedPage: async function (mediaType, pageNumb = 1) {
			const url = `${baseUrl}/${mediaType}/top_rated/?api_key=${apiKey}&page=${pageNumb}`;
			return await myFetch(url, options);
		},

		//
		/* More Movie/TVShow Details by id, getDetailsById(mediaType, id)*/
		getDetailsById: async function (mediaType, id) {
			const url = `${baseUrl}/${mediaType}/${id}?api_key=${apiKey}`;
			return await myFetch(url, options);
		},
		/* Movie and Tv show Cast and Crew */
		getCastAndCrew: async function (mediaType, id) {
			const url = `${baseUrl}/${mediaType}/${id}/credits?api_key=${apiKey}`;
			return await myFetch(url, options);
		},
		/* Fetch a list of movies similar to a specific movie */
		getSimilar: async function (mediaType, id, pageNumb = 1) {
			const url = `${baseUrl}/${mediaType}/${id}/similar?api_key=${apiKey}&page=${pageNumb}`;
			return await myFetch(url, options);
		},
		/* Fetch recommended movies based on a given movie. */
		getRecommendations: async function (mediaType, id) {
			const url = `${baseUrl}/${mediaType}/${id}/recommendations?api_key=${apiKey}`;
			return await myFetch(url, options);
		},

		/* Search Movie/TVShow */
		getSearch: async function (
			mediaType,
			pageNumb = 1,
			query,
			language = "en-US"
		) {
			const url = `${baseUrl}/search/${mediaType}?api_key=${apiKey}&page=${pageNumb}&query=${query}&language=${language}`;
			return await myFetch(url, options);
		},
		/* get Genre Lists */
		getGenreLists: async function (mediaType, query) {
			const url = `${baseUrl}/genre/${mediaType}/list?api_key=${apiKey}&query=${query}`;
			return await myFetch(url, options);
		},

		/* get Movie trailer Videos or clip */
		getVideosTrailers: async function (mediaType, id) {
			const url = `${baseUrl}/${mediaType}/${id}/videos?api_key=${apiKey}`;
			return await myFetch(url, options);
		},
		/* Search multi Movie and TVShow and anime and k drama etc. */
		getSearchMulti: async function (
			query,
			pageNumb = 1,
			language = "en-US"
		) {
			const url = `${baseUrl}/search/multi?api_key=${apiKey}&page=${pageNumb}&query=${query}&language=${language}`;
			return await myFetch(url, options);
		},

		tv: {
			/* Fetch Season Details */
			getSeason: async function (tv_id, season_number) {
				const url = `${baseUrl}/tv/${tv_id}/season/${season_number}?api_key=${apiKey}`;
				return await myFetch(url, options);
			},
			/* Fetch Episode Details */
			getEpisode: async function (tv_id, season_number, episode_number) {
				const url = `${baseUrl}/tv/${tv_id}/season/${season_number}/episode/${episode_number}?api_key=${apiKey}`;
				return await myFetch(url, options);
			},
		},
		movie: {
			getNowPlayingPage: async function (pageNumb = 1) {
				const url = `${baseUrl}/movie/now_playing?api_key=${apiKey}&page=${pageNumb}`;
				return await myFetch(url, options);
			},
			getUpcomingPage: async function (pageNumb = 1) {
				const url = `${baseUrl}/movie/upcoming?api_key=${apiKey}&page=${pageNumb}`;
				return await myFetch(url, options);
			},

			//
		},
	};
    return {TMDB,apiKey}
}
