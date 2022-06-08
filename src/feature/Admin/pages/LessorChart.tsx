import { grid } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	ResponsiveContainer,
	LineChart,
	XAxis,
	Line,
	Tooltip,
	CartesianGrid,
} from "recharts";
import axiosMethod from "../../../utils/api";
import "./home.css";
import WidgetLg from "../components/widgetLg/WidgetLg";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";

const LessorChart: React.FC = () => {
	const [chartData, setChartData] = useState<any>([]);
	const [tableData, setTableData] = useState<any>([]);
	const params = useParams();
	const { id } = params;
	useEffect(() => {
		async function getListBill() {
			const tableRes = await axiosMethod(`bill?maBct=${id}`, "get");
			const chartRes = await axiosMethod(
				`bill/lessor?maBct=${id}`,
				"get"
			);
			if (chartRes.success) {
				setChartData(chartRes);
			}
			setTableData(tableRes);
		}
		getListBill();
	}, []);
	return (
		<>
			{chartData.success && (
				<div className="home">
					<FeaturedInfo total={chartData.total} />
					<div className="chart">
						<h3 className="chartTitle">{id}</h3>
						<ResponsiveContainer width="100%" aspect={4 / 1}>
							<LineChart data={chartData.data}>
								<XAxis dataKey="day" stroke="#5550bd" />
								<Line
									type="monotone"
									dataKey="bills"
									stroke="#5550bd"
								/>
								<Tooltip />

								<CartesianGrid
									stroke="#e0dfdf"
									strokeDasharray="5 5"
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
					<div className="homeWidgets">
						<WidgetLg rows={tableData} />
					</div>
				</div>
			)}
		</>
	);
};

export default LessorChart;
