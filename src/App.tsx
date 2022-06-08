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
import TransactionAdmin from "./feature/Admin/pages/transactions";
import LessorChart from "./feature/Admin/pages/LessorChart";
import UserAdmin from "./feature/Admin/pages/UserAdmin";
import NotFound from "./components/Notfound";
import { Helmet } from "react-helmet";

const App: React.FC = () => (
	<>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Apart Traveloka</title>
		</Helmet>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/:id" element={<Detail />} />
				<Route path="/:id/booking" element={<Booking />} />
				<Route index element={<Home />} />
				<Route path="/:id/booking/payment" element={<Payments />} />
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
					<Route
						path="transactions"
						element={<TransactionAdmin />}
					/>
					<Route path="user" element={<UserAdmin />} />
					<Route path=":id/chart" element={<LessorChart />} />
					<Route path="bill/:id" element={<BillDetail />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	</>
);

export default App;
