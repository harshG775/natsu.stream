import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import { lazy } from 'react';

import Home from "./pages/With_Link/Home/Home"
import PageNotFound from './pages/Without_Link/PageNotFound';
const Overview = lazy(() => import("./pages/Without_Link/overview/Overview"));

export default function AppRoutes() {
	const router = createBrowserRouter([
		{
			path:"/",
			element:<AppLayout/>,
			children:[
				// without Link
				{
					index:true,
					element:<Home />
				},
				{
					path:"/discover",
					element:<Home />
				},
				{
					path:"/movies",
					element:<Home />
				},
				{
					path:"/tv-shows",
					element:<Home />
				},
				{
					path:"/settings",
					element:<Home />
				},

				// without Link
				{
					path:"/:media_type/about/:id",
					element:<Overview />
				},
			]
		},
		{

			path:"*",
			element:<PageNotFound/>
		}
	])
	return (
		<RouterProvider router={router} />
	);
}