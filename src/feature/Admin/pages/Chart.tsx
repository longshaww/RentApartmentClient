import { Chart as ChartJS, registerables } from "chart.js";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axiosMethod from "../../../utils/api";
import moment from "moment";
ChartJS.register(...registerables);

const Chart: React.FC = () => {
	const days = [];
	useEffect(() => {
		async function getBill() {
			const data = await axiosMethod("bill", "get");
			console.log(data);
		}
		getBill();
	}, []);

	const options = {
		layout: {
			padding: {
				left: 100,
				right: 100,
				top: 0,
			},
		},
	};

	for (let i = 0; i < 7; i++) {
		days.push(moment().add(i, "days").format("ll"));
	}
	const data = {
		labels: days,
		datasets: [
			{
				label: "Thống kê theo ngày",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	};

	return <Bar options={options} data={data} />;
};

export default Chart;
