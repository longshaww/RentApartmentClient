import React, { useEffect, useState } from "react";
// import Icon from '../../../components/Icon';
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
	Modal,
	ModalBody,
} from "reactstrap";
import "../../../assets/css/link.scss";
import dataCardRoom from "../../../assets/json/card-room";
import { ReactComponent as Icon4 } from "../../../assets/svg/icon4.svg";
import globalStateAndAction from "../../../container/global.state.action";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axiosMethod from "../../../utils/api";
import "../../../assets/css/apartment.detail.scss";
import { Link } from "react-router-dom";

const CardRoom: React.FC<{ detail: any }> = ({ detail }) => {
	const [modal, setModal] = useState<any>(false);
	const [idRoom, setIdRoom] = useState<string>("");
	const [apartment, setApartment] = useState<any>({});
	const [imgSlider, setImgSlider] = useState<number>(0);
	// Toggle for Modal
	const toggle = () => {
		setModal(!modal);
	};
	useEffect(() => {
		async function getData() {
			const data = await axiosMethod(`apartment/${idRoom}`, "get");
			setApartment(data);
		}
		getData();
	}, [idRoom]);
	const leftArrowClick = () => {
		setImgSlider((prevState) =>
			prevState > 1
				? prevState - 1
				: apartment.hinhAnhCanHos.length - 1
		);
	};
	const rightArrowClick = () => {
		setImgSlider((prevState) =>
			prevState < apartment.hinhAnhCanHos.length - 1
				? prevState + 1
				: 0
		);
	};
	return (
		<>
			<div>
				<Modal
					size="xl"
					isOpen={modal}
					toggle={toggle}
					centered={true}
				>
					<ModalBody className="p-0">
						{apartment && (
							<div className="row">
								<div className="col bg-dark">
									<div className="row">
										<div className="img d-flex justify-content-center p-4">
											<div
												className="text-light fs-1 my-auto me-4"
												style={{
													cursor: "pointer",
												}}
											>
												<AiOutlineArrowLeft
													onClick={
														leftArrowClick
													}
												/>
											</div>
											<img
												src={
													apartment.hinhAnhCanHos &&
													apartment
														.hinhAnhCanHos[
														imgSlider
													]
														? apartment
																.hinhAnhCanHos[
																imgSlider
														  ]
																.urlImageCanHo
														: "https://via.placeholder.com/350x250"
												}
												style={{
													width: "80%",
												}}
												className="rounded-3"
												alt=""
											></img>
											<div
												className="text-light fs-1 my-auto ms-4"
												style={{
													cursor: "pointer",
												}}
											>
												<AiOutlineArrowRight
													onClick={
														rightArrowClick
													}
												/>
											</div>
										</div>
									</div>
									<div className="row d-flex flex-wrap justify-content-start ms-2 my-3">
										{apartment.hinhAnhCanHos &&
											apartment.hinhAnhCanHos.map(
												(
													item: any,
													index: number
												) => {
													return (
														<>
															<img
																key={
																	index
																}
																src={
																	item.urlImageCanHo
																}
																alt=""
																onClick={() =>
																	setImgSlider(
																		index
																	)
																}
																className="img-slider-radius"
																style={{
																	width: "11rem",
																	height: "7rem",
																}}
															></img>
														</>
													);
												}
											)}
									</div>
								</div>
								<div className="col-3 h-100">
									<div className="room-information py-3 border-bottom">
										<div className="fw-bold">
											Thông tin phòng
										</div>
										<ul>
											<li>
												{apartment.dienTich}
											</li>
											<li>
												{
													apartment.soLuongKhach
												}{" "}
												khách
											</li>
										</ul>
									</div>

									<div className="room-covenient py-3 border-bottom">
										<div className="fw-bold">
											Tiện nghi phòng
										</div>
										<ul>
											{apartment.tienNghiCanHo &&
												apartment.tienNghiCanHo.map(
													(
														item: any,
														index: number
													) => {
														return (
															<li
																key={
																	index
																}
															>
																{
																	item.TenTienNghiCanHo
																}
															</li>
														);
													}
												)}
										</ul>
									</div>
									<div className="price-modal p-3 mt-3 shadow-lg ">
										<small>Khởi điểm từ:</small>
										<div className="d-flex">
											<div className="fw-bold text-danger fs-5">
												{apartment.gia},000
												VNĐ
											</div>
											<small className="mt-1">
												/phòng/đêm
											</small>
										</div>
										<button className="btn btn-primary mt-2">
											Thêm lựa chọn phòng
										</button>
									</div>
								</div>
							</div>
						)}
					</ModalBody>
				</Modal>
				{detail.canHos &&
					detail.canHos.map((canho: any, index: number) => {
						return (
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
																? canho
																		.hinhAnhCanHos[0]
																		?.urlImageCanHo
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
																			src={
																				img.urlImageCanHo
																			}
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
														setModal(
															!modal
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
												<CardTitle tag="h5">
													{
														canho.tenCanHo
													}
												</CardTitle>
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
																		<Link
																			to={`/${canho.maCanHo}/booking`}
																			className="text-decoration-none text-light fw-bold btn_price"
																		>
																			<Button className="fw-bold btn_price">
																				{" "}
																				Đặt
																				ngay
																			</Button>
																		</Link>
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
						);
					})}
			</div>
		</>
	);
};
export default globalStateAndAction(CardRoom);
