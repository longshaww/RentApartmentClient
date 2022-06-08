import Chart from "../components/chart/Chart";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetLg from "../components/widgetLg/WidgetLg";
import { useEffect, useState } from "react";
import axiosMethod from "../../../utils/api";

export default function AdminHome() {
	const [listBill, setListBill] = useState<any>([]);
	const [tableData, setTableData] = useState<any>([]);

	useEffect(() => {
		async function getBill() {
			const chartData = await axiosMethod("bill/chart", "get");
			const tableData = await axiosMethod("bill", "get");
			setTableData(tableData);
			if (chartData.success) {
				setListBill(chartData);
			}
		}
		getBill();
	}, []);

	return (
		<>
			{listBill.success && (
				<div className="home">
					<FeaturedInfo total={listBill.total} />
					<Chart
						data={listBill.data}
						title="User Analytics"
						grid
						dataKey="bills"
					/>
					<div className="homeWidgets">
						{/* <WidgetSm /> */}
						<WidgetLg rows={tableData} />
					</div>
				</div>
			)}
		</>
	);
}
