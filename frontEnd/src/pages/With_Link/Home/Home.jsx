import { useContext } from "react";
import DBContext from "../../../store/DBContext.js";
import { Actions } from "../../../store/DBReducer.js";

import "./home.css"
import { H3 } from "../../../pageLayouts/headings/Headings.jsx";

import Section from "../../../pageLayouts/section/Section.jsx";
import CarouselMini from "../../../components/carouselMini/CarouselMini.jsx";
export default function Home() {
	const [state, dispatch] = useContext(DBContext);
	return (
		<>
			<Carousel/>
			<Movies/>
			<TvShow/>
					
			<div className="max-w-2xl">
				<button onClick={()=>dispatch({type:Actions.INCREMENT,payload:state.count+1})}>add count:{state.count}</button>
			</div>
		</>
	);
}

import {useQuery} from "@tanstack/react-query"
import axios from "axios"

function Carousel() {
	const { isPending, error, data, /*isFetching*/ } = useQuery({
		queryKey: ["repoData"],
		queryFn: () =>axios.get("https://api.themoviedb.org/3/trending/all/week?page=1&api_key=c04c4d588ea04e1542849e5b03feadc9")
				.then((res) => res.data),
	});
	if (isPending) return "Loading..."
	
	if (error) return "An error has occurred: " + error.message
	return (
		<>
			<CarouselMini nowPlaying={data} />
		</>
	);
}
function Movies() {
	return (
		<>
			<H3 className="maxContainer">Movies</H3>
			<Section>item</Section>
		</>
	);
}
function TvShow() {
	return (
		<>
			<H3 className="maxContainer">Tv Shows</H3>
			<Section>item</Section>
		</>
	);
}
