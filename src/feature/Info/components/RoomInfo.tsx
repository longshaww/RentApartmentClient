import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import axiosMethod from "../../../utils/api";
import globalStateAndAction from "../../../container/global.state.action";

const RoomInfo: React.FC<{
	setDetailApartment: any;
	detailApartment: any;
	checkInDate: any;
	checkOutDate: any;
}> = ({ setDetailApartment, detailApartment, checkInDate, checkOutDate }) => {
	const { id } = useParams();

	useEffect(() => {
		async function getData() {
			const data = await axiosMethod(`apartment/${id}`, "get");
			setDetailApartment(data);
		}
		getData();
	}, [id, setDetailApartment]);
	return (
		<>
			<Card className="room_info shadow">
				<CardBody className="d-flex align-items-center">
					<div className="flex-shrink-0">
						<img
							src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4f35d2c4e9c6c6663f831cca1d2392b3.svg"
							alt=""
						/>
					</div>
					<div className="flex-grow ms-3">
						<CardTitle tag="h6" className="fs-5">
							{detailApartment.maBct2 &&
								detailApartment.maBct2.tenBct}
						</CardTitle>
						<CardSubtitle className="mb-2 text-muted">
							<small>
								{detailApartment.maBct2 &&
									detailApartment.maBct2.tenBct}
							</small>
						</CardSubtitle>
					</div>
				</CardBody>
				<CardBody className="bg_check-date">
					<CardText className="d-flex">
						<div className="flex-fill">
							<small className="text-muted ">
								Ngày nhận phòng:
							</small>
						</div>
						<div className="d-flex flex-column fw-bold flex-fill">
							<small>{checkInDate}</small>
							<small>14:00 - 22:00</small>
						</div>
					</CardText>
					<CardText className="d-flex">
						<div className="flex-fill margin-text">
							<small className="text-muted">
								Ngày trả phòng:
							</small>
						</div>
						<div className="d-flex flex-column fw-bold flex-fill">
							<small>{checkOutDate}</small>
							<small>14:00 - 22:00</small>
						</div>
					</CardText>
				</CardBody>
				<CardBody>
					<CardTitle tag="h6">
						(1x) {detailApartment.tenCanHo}
					</CardTitle>
					<div className="d-flex">
						<CardText className="flex-fill">
							<small className="text-muted">
								khách/phòng
							</small>
						</CardText>
						<CardText className="flex-fill">
							<small>
								{detailApartment.soLuongKhach} khách
							</small>
						</CardText>
					</div>
					<div className="d-flex mb-2">
						<CardText className="flex-fill pe-5 me-4">
							<small className="text-muted">
								Kiểu giường
							</small>
						</CardText>
						<CardText className="flex-fill ps-1">
							<small>
								{detailApartment.thongTinGiuong}
							</small>
						</CardText>
					</div>
					<div className="d-flex align-items-center mb-2">
						<div className="flex-shrink-0">
							<img
								className="rounded-3"
								src={
									detailApartment.hinhAnhCanHos &&
									detailApartment.hinhAnhCanHos[0]
										.urlImageCanHo
								}
								style={{
									width: "7rem",
									height: "7rem",
								}}
								alt=""
							/>
						</div>
						<div className="flex-grow-1 ms-4">
							<CardText>
								<img
									src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a5be12e728bdb331c596c7c181667dca.svg"
									alt=""
								/>
								<small className="ms-1 text-muted">
									Không gồm bữa sáng
								</small>
							</CardText>
							<CardText>
								<img
									src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5a913a9638da9c963966d8a962306abd.svg"
									alt=""
								/>
								<small className="ms-1 color_wifi">
									WiFi miễn phí
								</small>
							</CardText>
						</div>
					</div>
					<hr />
					<CardText>
						<img
							src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b7f44a75a61d79df6226747661f37ca0.svg"
							alt=""
						/>
						<small className="text-muted ms-1">
							Không hoàn tiền
						</small>
					</CardText>
					<CardText>
						<img
							src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7c8eec6b07ea44150dcaf8802cf712f2.svg"
							alt=""
						/>
						<small className="text-muted ms-1">
							Không áp dụng đổi lịch
						</small>
					</CardText>
				</CardBody>
			</Card>
		</>
	);
};
export default globalStateAndAction(RoomInfo);
