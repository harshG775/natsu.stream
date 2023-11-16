import { useContext } from "react";
import DBContext from "../../../store/DBContext.js";
import { Actions } from "../../../store/DBReducer.js";

import "./home.css"

import Section from "../../../pageLayouts/section/Section.jsx";
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


function Carousel() {
	return (
		<>
			<div className="max-w-2xl">Carousel</div>
		</>
	);
}
function Movies() {
	return (
		<>
			<div className="maxContainer">Movies</div>
			<Section>item</Section>
		</>
	);
}
function TvShow() {
	return (
		<>
			<div className="maxContainer">Tv Shows</div>
			<Section>item</Section>
		</>
	);
}
