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
import { checkImageString } from "../../../utils/check.image";
import { userGlobalCheck } from "../../../utils/user.me";
import { formatPrice } from "../../../utils/format.price";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import EditLessorModal from "./EditLessorModal";
import { deleteConfirm } from "../../../utils/delete.confirm.sweet-alert";
import { BsBarChartFill } from "react-icons/bs";

const CardHome: React.FC<any> = ({
	listLessor,
	setListLessor,
	setEditLessorModal,
	setLessorEditId,
}) => {
	let [searchParams] = useSearchParams();
	const userMe = userGlobalCheck();
	useEffect(() => {
		async function getData() {
			let data;
			if (userMe.user?.type === "PARTNER") {
				data = await axiosMethod(
					`lessor?partnerID=${userMe.user!.userId}`,
					"get"
				);
			}
			if (searchParams.get("q") !== null) {
				data = await axiosMethod(`lessor?${searchParams}`, "get");
			}

			if (
				searchParams.get("q") === null &&
				userMe.user?.type !== "PARTNER"
			) {
				data = await axiosMethod(`lessor`, "get");
			}
			if (data && data.success) {
				setListLessor(data.body);
			}
		}
		getData();
	}, [setListLessor, searchParams]);

	const onEditLessorClick = (id: string) => {
		setEditLessorModal();
		setLessorEditId(id);
	};

	const onDeleteLessorClick = async (id: string) => {
		deleteConfirm(
			"Lessor has been deleted",
			"Nothing happen yet !",
			async () => {
				const findById = listLessor.find(
					(a: any) => a.maBct === id
				);
				const index = listLessor.indexOf(findById);
				setListLessor([
					...listLessor.slice(0, index),
					...listLessor.slice(index + 1),
				]);
				await axiosMethod(`lessor/${id}`, "delete");
			}
		);
	};
	return (
		<>
			<EditLessorModal />
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
								<div className="col-2 border-start d-flex flex-column">
									{userMe.user?.type ===
										"PARTNER" && (
										<CardBody>
											<button
												className="btn"
												onClick={() =>
													onEditLessorClick(
														item.maBct
													)
												}
											>
												<AiOutlineEdit
													size={22}
												/>
											</button>
											<button
												className="btn"
												onClick={() =>
													onDeleteLessorClick(
														item.maBct
													)
												}
											>
												<AiOutlineDelete
													size={22}
												/>
											</button>
											<Link
												to={`/admin/${item.maBct}/chart`}
												className="btn"
											>
												<BsBarChartFill
													size={22}
												/>
											</Link>
										</CardBody>
									)}
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
											{formatPrice(
												item.giaTrungBinh
											)}
										</CardTitle>
										<select
											className="card-text form-select border-0"
											id="form-select-price"
											aria-label="Default select example"
										>
											<option selected>
												Giá cuối cùng
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
		</>
	);
};
export default globalStateAndAction(CardHome);
