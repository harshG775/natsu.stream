import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes.jsx";
import "./styles/index.css";

import DBContextProvider from "./store/DBContextProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>

		<DBContextProvider>
			<AppRoutes />
		</DBContextProvider>

	</React.StrictMode>
);
