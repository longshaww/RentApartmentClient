import React, { useEffect, useState } from "react";
import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	Button,
	Col,
	Row,
	CardImg,
	PopoverBody,
	PopoverHeader,
	UncontrolledPopover,
} from "reactstrap";
import "../../../assets/css/link.scss";
import dataCardRoom from "../../../assets/json/card-room";
import { ReactComponent as Icon4 } from "../../../assets/svg/icon4.svg";
import globalStateAndAction from "../../../container/global.state.action";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import axiosMethod from "../../../utils/api";
import "../../../assets/css/apartment.detail.scss";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { checkImageString } from "../../../utils/check.image";
import { deleteConfirm } from "../../../utils/delete.confirm.sweet-alert";
import ApartmentDetail from "./ApartmentDetail";
import EditApartmentModal from "./EditApartment.modal";
import CreateApartmentModal from "./CreateApartment.modal";
import { userGlobalCheck } from "../../../utils/user.me";
import { Toast } from "../../../utils/toast.sweet-alert";

const CardRoom: React.FC<any> = ({ setDetailLessor }) => {
	const { id } = useParams();
	const [detailApartmentModal, setDetailApartmentModal] =
		useState<Boolean>(false);
	const [editApartmentModal, setEditApartmentModal] = useState(false);

	const [idRoom, setIdRoom] = useState<string>("");
	const [apartment, setApartment] = useState<any>({});
	const [listApartment, setListApartment] = useState<any>([]);

	const [imgSlider, setImgSlider] = useState<number>(0);
	const userMe = userGlobalCheck();
	// Toggle for Modal

	//get single apartment when view detail
	useEffect(() => {
		async function getData() {
			const data = await axiosMethod(`apartment/${idRoom}`, "get");
			setApartment(data);
		}
		getData();
	}, [idRoom]);

	//get list apartment
	useEffect(() => {
		async function getListData() {
			const data = await axiosMethod(`apartment?maBct=${id}`, "get");
			setListApartment(data);
		}
		getListData();
	}, [id]);

	const dateCheck = (arr: any) => {
		if (!arr) {
			return;
		}
		for (let i = 0; i < arr.length; i++) {
			arr[i].diff = moment().diff(arr[i].ngayTao, "minutes");
		}
		arr.sort((a: any, b: any) => a.diff - b.diff);
		const checkoutDate = moment(
			arr[0].chiTietDatPhongs[0].thoiGianTra
		).format("ll");
		return (
			<span className="text-danger fw-bold text-end">
				Hết phòng đến hết ngày {checkoutDate}
			</span>
		);
	};

	const onEditApartmentClick = async (id: string) => {
		setIdRoom(id);
		setEditApartmentModal(!editApartmentModal);
	};

	const onDeleteApartmentClick = async (idApart: string) => {
		deleteConfirm(
			"Apartment has been deleted",
			"Nothing happen yet !",
			async () => {
				const findById = listApartment.find(
					(a: any) => a.maCanHo === idApart
				);
				const index = listApartment.indexOf(findById);
				setListApartment([
					...listApartment.slice(0, index),
					...listApartment.slice(index + 1),
				]);
				const deleteApartment = await axiosMethod(
					`apartment/${idApart}`,
					"delete"
				);
				if (deleteApartment.success) {
					const updatePrice = await axiosMethod(
						`lessor/average/${id}`,
						"put"
					);
					if (updatePrice.success) {
						setDetailLessor(updatePrice.body);
						Toast.fire({ icon: "success", title: "Updated" });
					}
				}
			}
		);
	};

	return (
		<>
			<EditApartmentModal
				idRoom={idRoom}
				listApartment={listApartment}
				setListApartment={setListApartment}
				editApartmentModal={editApartmentModal}
				setEditApartmentModal={setEditApartmentModal}
			/>

			{userMe.user && userMe.user.type === "PARTNER" && (
				<div className="text-center mb-3 p-4 shadow">
					<h3>Hi partner {userMe.user?.name} !</h3>
					<h4>Action</h4>
					<div className="d-flex justify-content-center">
						<CreateApartmentModal
							listApartment={listApartment}
							setListApartment={setListApartment}
						/>
						<Link
							to={`/admin/${id}/chart`}
							className="btn btn-primary ms-2"
						>
							Xem thống kê
						</Link>
					</div>
				</div>
			)}

			<ApartmentDetail
				detailApartmentModal={detailApartmentModal}
				setDetailApartmentModal={setDetailApartmentModal}
				apartment={apartment}
				imgSlider={imgSlider}
				setImgSlider={setImgSlider}
			/>
			{listApartment &&
				listApartment.map((canho: any, index: number) => {
					return (
						<>
							<Card
								className="shadow rounded mb-3 bg_card_room"
								key={index}
							>
								<CardBody>
									<CardTitle tag="h5">
										{canho.tenCanHo}
									</CardTitle>
									<Row>
										<Col sm="4" className="pe-0">
											<Card body>
												<div className="">
													<CardImg
														width="100%"
														alt=""
														src={
															canho
																.hinhAnhCanHos[0]
																? checkImageString(
																		canho
																			.hinhAnhCanHos[0]
																			?.urlImageCanHo
																  )
																: "https://via.placeholder.com/350x250"
														}
													/>
													<div className="d-flex pt-1 slide-thumbs">
														{canho
															.hinhAnhCanHos
															.length >
															0 &&
															canho.hinhAnhCanHos.map(
																(
																	img: any,
																	i: number
																) => {
																	return (
																		<CardImg
																			key={
																				i
																			}
																			style={{
																				width: "5rem",
																			}}
																			src={checkImageString(
																				img.urlImageCanHo
																			)}
																			alt=""
																			className={
																				i ===
																				canho
																					.hinhAnhCanHos
																					.length -
																					1
																					? ""
																					: "pe-1"
																			}
																		/>
																	);
																}
															)}
													</div>
												</div>

												<CardTitle
													tag="h6"
													className="pt-2"
												>
													<Icon4 />
													<span className="ps-1">
														{
															canho.dienTich
														}
													</span>
												</CardTitle>
												<div className="d-inline-flex align-items-start flex-column">
													{dataCardRoom.feature.map(
														(
															item,
															index
														) => {
															return (
																<CardText
																	key={
																		index
																	}
																	className=" rounded-pill px-3 type color_feature"
																>
																	<small className="">
																		{
																			item.text
																		}
																	</small>
																</CardText>
															);
														}
													)}
												</div>

												<Button
													className="mt-3 text-primary fw-bold btn_room_color link"
													onClick={() => {
														setDetailApartmentModal(
															!detailApartmentModal
														);
														setIdRoom(
															canho.maCanHo
														);
														setImgSlider(
															0
														);
													}}
												>
													Xem chi tiết
													phòng
												</Button>
											</Card>
										</Col>
										<Col sm="8">
											<Card body>
												<div className="d-flex">
													<CardTitle tag="h5">
														{
															canho.tenCanHo
														}
													</CardTitle>
													{userMe.user &&
														userMe
															.user
															.type ===
															"PARTNER" && (
															<div className="ms-auto">
																<button
																	className="btn"
																	onClick={() =>
																		onEditApartmentClick(
																			canho.maCanHo
																		)
																	}
																>
																	<AiOutlineEdit className="fs-4" />
																</button>
																<button
																	className="btn"
																	onClick={() =>
																		onDeleteApartmentClick(
																			canho.maCanHo
																		)
																	}
																>
																	<AiOutlineDelete className="fs-4" />
																</button>
															</div>
														)}
												</div>

												{dataCardRoom.information.map(
													(
														info,
														index
													) => {
														return (
															<>
																<div
																	key={
																		index
																	}
																	className="d-flex justify-content-between"
																>
																	<CardText className="">
																		<img
																			alt=""
																			src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/34f5976a0369969f82cb666b17aebf99.svg"
																			className="width_icon_room"
																		/>
																		<small className="ps-1 me-5">
																			{
																				canho.thongTinGiuong
																			}
																		</small>
																	</CardText>
																	<CardText className="">
																		<img
																			alt=""
																			src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/ed2587afbf72ad57cc07360a2a3cd783.svg"
																			className="width_icon_room"
																		/>
																		<small className="ps-1 me-5">
																			{
																				canho.soLuongKhach
																			}{" "}
																			khách
																		</small>
																	</CardText>
																	<CardText className="text-danger fw-bold">
																		<small className="ps-1 me-5">
																			(
																			{
																				canho.soLuongCon
																			}{" "}
																			phòng
																			trống)
																		</small>
																	</CardText>
																</div>
																<hr />
																<div className="row d-flex">
																	<div className="col-4">
																		{info.convenient.map(
																			(
																				convenient,
																				index
																			) => {
																				return (
																					<CardText
																						key={
																							index
																						}
																					>
																						<img
																							src={
																								convenient.icon2
																							}
																							alt=""
																							className="width_icon_room"
																						/>
																						<small className="ps-1">
																							{
																								convenient.item2
																							}
																						</small>
																					</CardText>
																				);
																			}
																		)}
																	</div>
																	<div className="col-4">
																		{info.policy.map(
																			(
																				policy,
																				index
																			) => {
																				return (
																					<CardText
																						key={
																							index
																						}
																					>
																						<img
																							src={
																								policy.icon3
																							}
																							alt=""
																							className="width_icon_room"
																						/>
																						<small className="ps-1">
																							{
																								policy.item3
																							}
																						</small>
																					</CardText>
																				);
																			}
																		)}
																	</div>
																	<div className="col-4 d-flex align-items-end flex-column">
																		{info.price.map(
																			(
																				price,
																				index
																			) => {
																				return (
																					<>
																						<CardText
																							key={
																								index
																							}
																							className="m-0"
																						>
																							<small className="text-decoration-line-through">
																								{
																									price.cost
																								}
																							</small>
																						</CardText>
																						<CardText
																							tag="h5"
																							className="size-color_price_room fw-bold m-0"
																						>
																							{
																								canho.gia
																							}
																							.000
																							VND
																						</CardText>
																						<CardText className="m-0">
																							<small className="text-muted">
																								{
																									price.text1
																								}
																							</small>
																						</CardText>
																						<CardText
																							className="m-0 text-primary"
																							id="UncontrolledPopover"
																							type="button"
																							data-bs-trigger="hover focus"
																							data-bs-toggle="popover"
																						>
																							<small>
																								{
																									price.text2
																								}
																							</small>
																						</CardText>
																						<UncontrolledPopover
																							placement="bottom"
																							target="UncontrolledPopover"
																						>
																							<PopoverHeader>
																								Popover
																								Title
																							</PopoverHeader>
																							<PopoverBody>
																								Sed
																								posuere
																								consectetur
																								est
																								at
																								lobortis.
																								Aenean
																								eu
																								leo
																								quam.
																								Pellentesque
																								ornare
																								sem
																								lacinia
																								quam
																								venenatis
																								vestibulum.
																							</PopoverBody>
																						</UncontrolledPopover>
																					</>
																				);
																			}
																		)}
																		{canho
																			.phieuDatPhongs
																			.length >
																			0 &&
																			canho.soLuongCon <
																				1 &&
																			dateCheck(
																				canho.phieuDatPhongs
																			)}
																		{canho.soLuongCon <
																		1 ? (
																			<Button
																				className="fw-bold btn_price disabled"
																				disabled
																			>
																				Hết
																				phòng
																			</Button>
																		) : (
																			<Link
																				to={`/${canho.maCanHo}/booking`}
																				className="text-decoration-none text-light"
																			>
																				<Button className="fw-bold btn_price">
																					Đặt
																					ngay
																				</Button>
																			</Link>
																		)}
																	</div>
																</div>
															</>
														);
													}
												)}
											</Card>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</>
					);
				})}
		</>
	);
};
export default globalStateAndAction(CardRoom);
