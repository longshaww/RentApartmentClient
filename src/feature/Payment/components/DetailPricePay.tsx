import React from "react";
import { Col, Container, Row } from "reactstrap";
import globalStateAndAction from "../../../container/global.state.action";
import { formatPrice } from "../../../utils/format.price";

const DetailPricePay: React.FC<any> = ({ detailApartment }) => {
	const userInfo = JSON.parse(
		localStorage.getItem("user_info_payment") || "{}"
	);
	return (
		<>
			{userInfo.tongTien && detailApartment && (
				<Container className="pe-5 pt-3 mt-3 mb-5 bg_check-date">
					<p className="fw-bold">Chi tiết giá</p>
					<Row className="mb-3">
						<Col xs="9" className="pe-0">
							<p className="m-0">
								<small>
									{detailApartment.maBct2 &&
										detailApartment.maBct2.tenBct}
									,
								</small>
							</p>
							<small>{detailApartment.tenCanHo}</small>
							<small className="ps-2">
								x {userInfo.soLuongCanHo}
							</small>
						</Col>
						<Col
							xs="3"
							className="p-0 d-flex justify-content-end "
						>
							<small>374.780 VND</small>
						</Col>
					</Row>
					<Row>
						<Col xs="9" className="pe-0">
							<small>Thuế và phí</small>
							<small className="ps-2"></small>
						</Col>
						<Col
							xs="3"
							className="p-0 d-flex justify-content-end "
						>
							<small>10%</small>
						</Col>
					</Row>
					<hr className="row mt-3 ms-0" />
					<Row>
						<Col xs="9" className="pe-0">
							<small>Tổng giá tiền</small>
						</Col>
						<Col
							xs="3"
							className="p-0 d-flex justify-content-end "
						>
							<p>{formatPrice(userInfo.tongTien)}</p>
						</Col>
					</Row>
				</Container>
			)}
		</>
	);
};
export default globalStateAndAction(DetailPricePay);
