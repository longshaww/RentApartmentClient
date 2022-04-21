import React from "react";
// import Icon from "../../../components/Icon";
// import StarFilter from "../../../components/Icon";
import { Form, FormGroup, Input, Label } from "reactstrap";

const Filter: React.FC = () => {
	const consequence: string[] = [
		"Giá cao nhất",
		"Giá thấp nhất",
		"Điểm đánh giá",
		"Độ phổ biến",
	];

	const convenient: string[] = [
		"Wifi",
		"Hồ bơi",
		"Chỗ đậu xe",
		"Nhà hàng",
		"Lễ tân 24h",
		"Thang máy",
		"Trung tâm thể dục",
		"Phòng họp",
		"Đưa đón sân bay",
	];

	const accommodation: string[] = [
		"Tất cả",
		"Biệt thự",
		"Căn hộ",
		"Thanh toán khi nhận phòng",
		"Chọn nhiều nhất",
		"Ưu đãi đặc biệt",
	];

	const stay: string[] = ["Biệt thự", "Căn hộ"];

	// const star = <Icon name="IcStar" />;
	return (
		<>
			<div className="p-3 px-4 shadow ">
				<div className="border-bottom pb-2">
					<div className="fw-bold">Sắp xếp kết quả</div>
					<div>Sắp xếp kết quả theo lựa chọn</div>
				</div>
				<Form className="row row-cols-2 mt-3 ms-0">
					{consequence.map((item) => {
						return (
							<FormGroup check className="pe-1">
								<Input type="radio" />
								<Label check>{item}</Label>
							</FormGroup>
						);
					})}
				</Form>
			</div>

			<div className="p-3 px-4 shadow p-3 mb-2 bg-body rounded mt-2">
				<div className="mb-2">
					<div className="fw-bold">Hạng sao</div>
				</div>
				<Form>
					{/* <StarFilter onChanged={(payload) => console.log(999, payload)} /> */}
				</Form>
			</div>

			<div className="p-3 px-4 shadow p-3 mb-2 bg-body rounded mt-2">
				<div className="mb-2">
					<div className="fw-bold">Tiện nghi</div>
				</div>
				<Form>
					{convenient.map((item) => {
						return (
							<FormGroup check>
								<Input type="checkbox" />
								<Label check>{item}</Label>
							</FormGroup>
						);
					})}
				</Form>
			</div>
			<div className="p-3 px-4 shadow p-3 mb-2 bg-body rounded mt-2">
				<div className="mb-2">
					<div className="fw-bold">Ưu tiên nơi nghỉ</div>
				</div>
				<Form>
					{accommodation.map((item) => {
						return (
							<FormGroup check>
								<Input type="radio" />
								<Label check>{item}</Label>
							</FormGroup>
						);
					})}
				</Form>
			</div>
			<div className="p-3 px-4 shadow p-3 mb-2 bg-body rounded mt-2">
				<div className="mb-2">
					<div className="fw-bold">Loại hình lưu trú</div>
				</div>
				<Form>
					{stay.map((item) => {
						return (
							<FormGroup check>
								<Input type="checkbox" />
								<Label check>{item}</Label>
							</FormGroup>
						);
					})}
				</Form>
			</div>
		</>
	);
};
export default Filter;
