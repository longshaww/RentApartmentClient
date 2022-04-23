import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/app.scss";
import Home from "./feature/Home/pages/Home";
import Detail from "./feature/Detail/pages/Detail";
import Layout from "./layout/Layout";
import Booking from "./feature/Info/pages/booking";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/:id" element={<Detail />} />
				<Route path="/:id/booking" element={<Booking />} />
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
};

export default App;
