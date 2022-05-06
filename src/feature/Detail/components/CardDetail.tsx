import React, { useState } from "react";
// import Icon from "../../../components/Icon";
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Button,
} from "reactstrap";
import { ReactComponent as IcStar } from "../../../assets/svg/star.svg";
import { ReactComponent as IcLocal } from "../../../assets/svg/local.svg";
import { ReactComponent as IcConvenient } from "../../../assets/svg/convenient.svg";
import globalStateAndAction from "../../../container/global.state.action";
import "../../../assets/css/detail.scss";
import { Link } from "react-router-dom";

import dataCardDetail from "../../../assets/json/card-detail";

const CardDetail: React.FC<{
	detailLessor: any;
}> = ({ detailLessor }) => {
	const [imageIndex, setImageIndex] = useState<number>(0);

	return (
		<>
			<Card className="shadow rounded mb-3">
				<CardBody>
					<CardTitle tag="h4" className="fw-bold">
						{detailLessor.tenBct}
					</CardTitle>
					<CardSubtitle
						className="mb-2 text-muted fw-bold"
						tag="h6"
					>
						{detailLessor.tenBct}
					</CardSubtitle>
					<div className="col d-flex justify-content-start">
						<CardText className="border border-info bg-info rounded-pill px-3 type">
							<small className="text-white fw-bold text-uppercase">
								{
									detailLessor.maLoaiLuuTru
										?.tenLoaiLuuTru
								}
							</small>
						</CardText>
						<div className="ms-2 width_icon">
							<IcStar />
						</div>
					</div>
					<div className="d-flex justify-content-start">
						<div className="me-1 width_icon">
							<IcLocal />
						</div>
						<CardText className="fw-bold text-muted type">
							{detailLessor.diaChi}
						</CardText>
					</div>
					<hr />
					<div className="row d-flex">
						<div className="col-10">
							<img
								src={
									detailLessor.hinhAnhBcts &&
									detailLessor.hinhAnhBcts[
										imageIndex
									].urlImageBct
								}
								alt=""
								style={{ width: "100%" }}
								className="img-fluid"
							></img>
						</div>
						<div className="col ps-1 slide-thumbs d-flex flex-column justify-content-between">
							{detailLessor.hinhAnhBcts &&
								detailLessor.hinhAnhBcts.map(
									(item: any, index: number) => (
										<CardImg
											width="100%"
											onClick={() =>
												setImageIndex(index)
											}
											src={item.urlImageBct}
										/>
									)
								)}
						</div>
					</div>
				</CardBody>
				<CardBody className="row">
					<div className="col-6">
						<CardText tag="h4">Traveloka</CardText>
						<h5 className="d-flex justify-content-start mt-2">
							<div className="me-1">
								<IcConvenient />
							</div>
							<CardText className="type text-info me-1 fw-bold">
								{detailLessor.diemTienLoi} Tiện lợi
							</CardText>
						</h5>
						<CardText>
							đánh giá từ {detailLessor.luotDanhGia} du
							khách
						</CardText>
					</div>
					<div className="col-6 rigth">
						<CardText>
							<small className="">
								Giá phòng mỗi đêm từ
							</small>
						</CardText>
						<CardText className="size-color_price fw-bold">
							{detailLessor.giaTrungBinh &&
							detailLessor.giaTrungBinh
								.toString()
								.includes(".")
								? detailLessor.giaTrungBinh + "00 VNĐ"
								: detailLessor.giaTrungBinh +
								  ".000 VNĐ"}
						</CardText>
						<Button className="fw-bold btn_price px-5">
							Đặt ngay
						</Button>
					</div>
				</CardBody>
				<CardBody className="ps-4">
					<CardText tag="h5" className="mb-4">
						Tiện nghi căn hộ
					</CardText>
					<div className="d-flex justify-content-start pb-4">
						{dataCardDetail.convenient.map((item) => {
							return (
								<Link
									to="/"
									className="convenient-link"
								>
									<div className="text-center px-5">
										<img
											className="width_icon_convenient"
											src={item.img}
											alt=""
										/>
										<CardText>
											{item.title}
										</CardText>
									</div>
								</Link>
							);
						})}
					</div>
				</CardBody>
			</Card>
		</>
	);
};
export default globalStateAndAction(CardDetail);
