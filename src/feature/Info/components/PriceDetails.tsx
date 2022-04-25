import React from "react";
import { useSelector } from "react-redux";
import { Card, CardTitle, CardText } from "reactstrap";

const PriceDetails: React.FC = () => {
	const thue = 10;
	const apartmentInfoPrice = useSelector(
		(state: any) => state.detailApartment.apartment
	);
	let gia = apartmentInfoPrice.gia;
	let tienThue = (apartmentInfoPrice.gia * thue) / 100;
	let thanhTien = gia + tienThue;
	return (
		<>
			<div className="price_details mb-5">
				<div className="mb-3 fw-bold">Chi tiết giá</div>
				<Card className="shadow">
					<CardTitle
						tag="h6"
						className="px-3 pt-3 fw-bold d-flex justify-content-between m-0"
					>
						<CardText className="m-0">Thành tiền</CardText>
						<CardText>
							{thanhTien.toString().includes(".")
								? thanhTien + "00 VNĐ"
								: thanhTien + ".000 VNĐ"}
						</CardText>
					</CardTitle>
					<hr />
					<CardTitle className="p-3 d-flex justify-content-between m-0">
						<CardText className="m-0">
							(1x) {apartmentInfoPrice.tenCanHo} (1 đêm)
						</CardText>
						<CardText>
							{apartmentInfoPrice.gia},000 VNĐ
						</CardText>
					</CardTitle>
					<CardTitle className="p-3 d-flex justify-content-between m-0">
						<CardText className="m-0">Thuế</CardText>
						<CardText>10%</CardText>
					</CardTitle>
				</Card>
			</div>
		</>
	);
};
export default PriceDetails;
