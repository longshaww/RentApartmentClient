import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/app.scss";
import AdminHome from "./feature/Admin/pages";
import BillDetail from "./feature/Admin/pages/bill.detail";
import NewApartment from "./feature/Admin/pages/NewApartment";
import Detail from "./feature/Detail/pages/Detail";
import Booking from "./feature/Info/pages/booking";
import Payments from "./feature/Payment/pages/payments";
import PaymentSuccess from "./feature/Payment/pages/success";
import UserMe from "./feature/Me/pages/me";
import Layout from "./layout/Layout";
import LayoutAdmin from "./layout/Layout.admin";
import Home from "./feature/Home/pages/Home";
import NewLessor from "./feature/Admin/pages/NewLessor";
const App: React.FC = () => {
	return (
		<>
			<Routes>
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
					<Route
						path="/:id/newApartment"
						element={<NewApartment />}
					/>
					<Route path="admin" element={<LayoutAdmin />}>
						<Route index element={<AdminHome />} />
						<Route path="newLessor" element={<NewLessor />} />
						<Route path="bill/:id" element={<BillDetail />} />
					</Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
