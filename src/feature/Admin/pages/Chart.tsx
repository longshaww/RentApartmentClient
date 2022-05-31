import { Chart as ChartJS, registerables } from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axiosMethod from "../../../utils/api";
import moment from "moment";
import { Container, Input } from "reactstrap";
ChartJS.register(...registerables);

const Chart: React.FC = () => {
	const [listBill, setListBill] = useState<any>([]);

	useEffect(() => {
		async function getBill() {
			const data = await axiosMethod("bill", "get");
			setListBill(data);
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
	const arrPrice = listBill.map((bill: any) => {
		const arrBills = bill.bills;
		if (arrBills.length > 1) {
			const reduceFirst = arrBills.reduce(
				(acc: any, bill: any) => acc.TongTien + bill.TongTien
			);
			return [reduceFirst];
		}
		return arrBills.map((b: any) => {
			if (b.TongTien) {
				b = b.TongTien;
			}
			return b;
		});
	});

	arrPrice.map((b: any) => {
		if (b.length === 0) {
			b[0] = 0;
		}
		return b;
	});

	const data = {
		labels: listBill.map((bill: any) => {
			return moment(bill.day).format("ll");
		}),
		datasets: [
			{
				label: "Thống kê theo ngày",
				data: arrPrice.flat(),
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

	return (
		<Container className="pt-5">
			{listBill.length > 0 && (
				<Input type="select">
					<option>
						{moment(listBill[0].day).format("ll") +
							" - " +
							moment(
								listBill[listBill.length - 1].day
							).format("ll")}
					</option>
					<option>
						{moment(listBill[listBill.length - 1].day)
							.add(1, "days")
							.format("ll") +
							" - " +
							moment(listBill[listBill.length - 1].day)
								.add(7, "days")
								.format("ll")}
					</option>
				</Input>
			)}
			{listBill.length > 0 && <Line options={options} data={data} />}
		</Container>
	);
};

export default Chart;
