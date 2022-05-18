import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Detail from "../feature/Detail/pages/Detail";
import Home from "../feature/Home/pages/Home";
import Booking from "../feature/Info/pages/booking";
import Layout from "../layout/Layout";
import Review from "../feature/Review/pages/review";
import Payments from "../feature/Payment/pages/payments";

const AnimatedRoute: React.FC = () => {
	const location = useLocation();

	return (
		<>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Layout />}>
						<Route path="/:id" element={<Detail />} />
						<Route
							path="/:id/booking"
							element={<Booking />}
						/>
						<Route index element={<Home />} />
						<Route path="/test/payment" element={<Payments />}></Route>
						<Route path="/test/review" element={<Review />}></Route>
					</Route>
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default AnimatedRoute;
