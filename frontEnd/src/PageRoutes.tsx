import { Routes ,Route } from "react-router-dom";

import HomePage from "./pages/home/Page";

import TopNavBar from "./layouts/topbar/TopBar";
import NotFound from "./pages/notFound/Page";

export default function PageRoutes() {
	return (
		<div id="page">
			<TopNavBar/>
			<Routes>
				<Route path='/' element={<HomePage/>} />
                
				<Route path='*' element={<NotFound/>} />
			</Routes>
		</div>
	);
}