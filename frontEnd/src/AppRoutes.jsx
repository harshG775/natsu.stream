import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
// import { lazy } from 'react';
import Home from "./pages/With_Link/Home";
import PageNotFound from './pages/Without_Link/PageNotFound';

export default function AppRoutes() {
	const router = createBrowserRouter([
		{
			path:"/",
			element:<AppLayout/>,
			children:[
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