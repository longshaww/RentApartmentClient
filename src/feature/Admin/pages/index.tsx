import Chart from "../components/chart/Chart";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetLg from "../components/widgetLg/WidgetLg";
import { useEffect, useState } from "react";
import axiosMethod from "../../../utils/api";

export default function AdminHome() {
	const [listBill, setListBill] = useState<any>([]);

	useEffect(() => {
		async function getBill() {
			const data = await axiosMethod("bill/chart", "get");
			setListBill(data);
		}
		getBill();
	}, []);

	console.log(listBill);
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart
				data={listBill}
				title="User Analytics"
				grid
				dataKey="bills"
			/>
			<div className="homeWidgets">
				{/* <WidgetSm /> */}
				<WidgetLg />
			</div>
		</div>
	);
}
