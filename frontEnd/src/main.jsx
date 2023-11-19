import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes.jsx";
import "./styles/index.css";
import "./styles/customClasses.css";

import {QueryClient,QueryClientProvider,} from "@tanstack/react-query"
const queryClient = new QueryClient()

import DBContextProvider from "./store/DBContextProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<DBContextProvider>
			<QueryClientProvider client={queryClient}>

				<AppRoutes />		

			</QueryClientProvider>
		</DBContextProvider>
	</React.StrictMode>
);