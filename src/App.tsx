import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/app.scss";
import Home from "./feature/Home/pages/Home";
import Detail from "./feature/Detail/pages/Detail";
import Layout from "./layout/Layout";
import Booking from "./feature/Info/pages/booking";
import Review from "./feature/Review/pages/review";
import Payment from "./feature/Payment/pages/payments"

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/review" element={<Review />} />
				<Route path="/payments" element={<Payment />} />
				<Route path="/:id" element={<Detail />} />
				<Route path="/:id/booking" element={<Booking />} />
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
};

export default App;
