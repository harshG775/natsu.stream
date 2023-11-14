import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
// import { lazy } from 'react';
import Home from "./pages/With_Link/Home";

export default function AppRoutes() {
	const router = createBrowserRouter([
		{
			path:"/",
			element:<AppLayout/>,
			children:[
				{
					index:true,
					element:<Home />
				}

			]
		}
	])
	return (
		<RouterProvider router={router} />
	);
}
