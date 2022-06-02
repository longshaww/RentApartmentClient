import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Detail from "../feature/Detail/pages/Detail";
import Home from "../feature/Home/pages/Home";
import Booking from "../feature/Info/pages/booking";
import Layout from "../layout/Layout";
import Payments from "../feature/Payment/pages/payments";
import PaymentSuccess from "../feature/Payment/pages/success";
import UserMe from "../feature/Me/pages/me";
import NewApartment from "../feature/Admin/pages/NewApartment";
import NewLessor from "../feature/Admin/pages/NewLessor";
import AdminHome from "../feature/Admin/pages";
import LayoutAdmin from "../layout/Layout.admin";

const AnimatedRoute: React.FC = () => {
	const location = useLocation();

	return (
		<>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Layout />}>
					<Route path="/:id" element={<Detail />} />
					<Route path="/:id/booking" element={<Booking />} />
					<Route index element={<Home />} />
					<Route
						path="/:id/booking/payment"
						element={<Payments />}
					/>
					<Route
						path="/:id/booking/payment/success"
						element={<PaymentSuccess />}
					/>
					<Route path="me" element={<UserMe />} />
					<Route path="newLessor" element={<NewLessor />} />
					<Route
						path="/:id/newApartment"
						element={<NewApartment />}
					/>
					<Route path="/admin" element={<LayoutAdmin />}>
						<Route index element={<AdminHome />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
};

export default AnimatedRoute;
