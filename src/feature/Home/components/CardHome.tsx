import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../../../assets/css/app.scss";
import "../../../assets/css/link.scss";
import "../../../assets/css/card.scss";
import { ReactComponent as IcStar } from "../../../assets/svg/star.svg";
import { ReactComponent as IcLocal } from "../../../assets/svg/local.svg";
import { ReactComponent as IcConvenient } from "../../../assets/svg/convenient.svg";
import globalStateAndAction from "../../../container/global.state.action";
import "regenerator-runtime/runtime";
import axiosMethod from "../../../utils/api";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import Pagination from "../../../components/Pagination";
import { checkImageString } from "../../../utils/check.image";

const CardHome: React.FC<{ listLessor: any; setListLessor: any }> = ({
	listLessor,
	setListLessor,
}) => {
	let [searchParams] = useSearchParams();

	useEffect(() => {
		async function getData() {
			const data = await axiosMethod(
				searchParams.get("q") !== null
					? `lessor?${searchParams}`
					: `lessor`,
				"get"
			);
			if (data.success) {
				setListLessor(data.body);
			}
		}
		getData();
	}, [setListLessor, searchParams]);

	return (
		<>
			{listLessor &&
				listLessor.map((item: any) => {
					return (
						<Card
							className="my-3 ms-2 shadow"
							key={item.maBct}
						>
							<div className="row g-0 ">
								<Link
									to={item.maBct}
									className="stretched-link d-flex col-10 link text-decoration-none p-0"
								>
									<div className="col-md-4 ps-0">
										<img
											src={checkImageString(
												item.hinhAnhBcts[0]
													.urlImageBct
											)}
											style={{
												height: "100%",
											}}
											className="img-fluid rounded-start col-xl"
											alt="..."
										/>
									</div>
									<div className="col-md-8 px-0">
										<CardBody className="text-black pe-0">
											<h4 className="card-title">
												{item.tenBct}
											</h4>
											<CardText className="col d-flex justify-content-start">
												<p className="border border-info rounded-pill px-3 type">
													<small
														key={
															item
																.maLoaiLuuTru
																.maLoaiLuuTru
														}
														className="text-info fw-bold"
													>
														{
															item
																.maLoaiLuuTru
																.tenLoaiLuuTru
														}
													</small>
												</p>
												<div className="ms-2 width_icon">
													<IcStar />
												</div>
											</CardText>
											<div className="d-flex justify-content-start mt-2">
												<div className="me-1 width_icon">
													<IcLocal />
												</div>
												<CardText className="fw-bold text-muted type ellipsis">
													{item.diaChi}
												</CardText>
											</div>
											<div className="d-flex justify-content-start mt-2">
												<div className="me-1 width_icon">
													<IcConvenient />
												</div>
												<CardText className="card-text type">
													<small className="text-info me-1 fw-bold">
														Tiện lợi -{" "}
														{
															item.diemTienLoi
														}
													</small>
													<small className="text-muted">
														(
														{
															item.luotDanhGia
														}
														)
													</small>
												</CardText>
											</div>
										</CardBody>
									</div>
								</Link>
								<div className="col-2 border-start d-flex">
									<CardBody className="col-12 bottom-0 align-self-end">
										<CardText className="mb-0">
											<small className="text-primary fw-bold">
												Thanh toán khi nhận
												phòng
											</small>
										</CardText>
										<CardText className="mb-0">
											<small className="text-decoration-line-through">
												736.667 VND
											</small>
										</CardText>
										<CardTitle
											tag="h5"
											className="color-price fw-bold m-0 mb-0"
										>
											{item.giaTrungBinh
												.toString()
												.includes(".")
												? item.giaTrungBinh +
												  "00 VND"
												: item.giaTrungBinh +
												  ".000 VNĐ"}
										</CardTitle>
										<select
											className="card-text form-select border-0"
											id="form-select-price"
											aria-label="Default select example"
										>
											<option selected>
												<small>
													Giá cuối cùng
												</small>
											</option>
											<option value="1">
												One
											</option>
											<option value="2">
												Two
											</option>
											<option value="3">
												Three
											</option>
										</select>
									</CardBody>
								</div>
							</div>
						</Card>
					);
				})}
			<div className="d-flex justify-content-center z-index mt-5">
				<Pagination />
			</div>
		</>
	);
};
export default globalStateAndAction(CardHome);
