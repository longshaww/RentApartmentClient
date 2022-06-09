import moment from "moment";
import React from "react";
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";
import { v4 as uuid } from "uuid";
import "../../../assets/css/payments.scss";
import globalStateAndAction from "../../../container/global.state.action";

const CheckInfo: React.FC<any> = ({ detailApartment }) => {
	const userInfo = JSON.parse(
		localStorage.getItem("user_info_payment") || "{}"
	);

	return (
		<>
			{userInfo.tongTien && detailApartment && (
				<Card className="room_info shadow">
					<CardBody className="p-0">
						<div>
							<CardTitle className="text-muted px-3 pt-3 fw-bold">
								<small>MÃ ĐẶT CHỖ</small>
							</CardTitle>
							<CardText className="px-3">
								{uuid()}
							</CardText>
						</div>
						<hr className="" />
						<div>
							<CardTitle className="text-muted px-3 fw-bold">
								<small>
									KIỂM TRA THÔNG TIN ĐẶT PHÒNG
								</small>
							</CardTitle>
							<CardSubtitle className="px-3 fw-bold mb-3">
								{detailApartment.maBct2 &&
									detailApartment.maBct2.tenBct}
							</CardSubtitle>
							<CardText className="ms-1">
								<ul>
									<li className="list-check">
										{userInfo.thoiGianNhan}
									</li>
									<li className="list-check">
										{moment(
											userInfo.thoiGianTra
										).diff(
											moment(
												userInfo.thoiGianNhan
											),
											"days"
										)}{" "}
										đêm
									</li>
									<li className="list-check">
										{detailApartment.tenCanHo}
									</li>
									<li className="list-check">
										{userInfo.soLuongCanHo} phòng
									</li>
								</ul>
							</CardText>
						</div>
						<hr />
						<div>
							<CardTitle className="text-muted px-3 fw-bold">
								<small>KHÁCH</small>
							</CardTitle>
							<CardText className="px-3 pb-3">
								{userInfo.ten}
							</CardText>
						</div>
					</CardBody>
				</Card>
			)}
		</>
	);
};
export default globalStateAndAction(CheckInfo);
