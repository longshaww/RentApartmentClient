import React, { useEffect, useState } from "react";
import "./assets/css/app.scss";
import Home from "./feature/Home/pages/Home";
import Detail from "./feature/Detail/pages/Detail";
import Layout from "./layout/Layout";
import Booking from "./feature/Info/pages/booking";
import Review from "./feature/Review/pages/review";
import Payment from "./feature/Payment/pages/payments"

import AnimatedRoutes from "./components/AnimatedRoutes";
import logo from "./logo.svg";
import { Routes, Route } from "react-router";

const App: React.FC = () => {
	const [loading, setLoading] = useState<Boolean>(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<><Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/review" element={<Review />} />
				<Route path="/payments" element={<Payment />} />
				<Route path="/:id" element={<Detail />} />
				<Route path="/:id/booking" element={<Booking />} />
				<Route index element={<Home />} />
			</Route>
		</Routes><>
				{loading ? (
					<div className="App">
						<header className="App-header">
							<img src={logo} className="App-logo"></img>
							<p className="mt-5 text-info fs-1">
								<em>Traveloka</em>
							</p>
						</header>
					</div>
				) : (
					<AnimatedRoutes />
				)}
			</></>
	);
};

export default App;
