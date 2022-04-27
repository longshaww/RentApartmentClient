import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Detail from "../feature/Detail/pages/Detail";
import Home from "../feature/Home/pages/Home";
import Booking from "../feature/Info/pages/booking";
import Layout from "../layout/Layout";

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
					</Route>
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default AnimatedRoute;
