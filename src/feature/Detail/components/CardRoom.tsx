import React from "react";
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
} from "reactstrap";
import { Link } from "react-router-dom";
import "../../../assets/css/link.scss";
import dataCardRoom from "../../../assets/json/card-room";
import { ReactComponent as Icon4 } from "../../../assets/svg/icon4.svg";

const CardRoom: React.FC<{ dataDetail: any }> = ({ dataDetail }) => {
	return (
		<>
			<div>
				{dataDetail.canHos &&
					dataDetail.canHos.map((canho: any) => {
						return (
							<Card className="shadow rounded mb-3 bg_card_room">
								<CardBody>
									<CardTitle tag="h5">
										{canho.tenCanHo}
									</CardTitle>
									<Row>
										<Col sm="4" className="pe-0">
											<Card body>
												{dataCardRoom.imgRoom.map(
													(Title) => {
														return (
															<div className="">
																<CardImg
																	width="100%"
																	alt=""
																	src={
																		Title.imgTitle
																	}
																/>
																<div className="d-flex pt-1 slide-thumbs">
																	{Title.imgItems.map(
																		(
																			item,
																			i
																		) => {
																			return (
																				<CardImg
																					width="100%"
																					src={
																						item.img
																					}
																					alt=""
																					className={
																						i ===
																						Title
																							.imgItems
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
														);
													}
												)}
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
															item
														) => {
															return (
																<CardText className=" rounded-pill px-3 type color_feature">
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

												<Button className="mt-3 text-primary fw-bold btn_room_color link">
													<Link
														to={
															canho.maCanHo
														}
														className="stretched-link"
													></Link>
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
													(info) => {
														return (
															<>
																<div className="d-flex justify-content-between">
																	<CardText className="">
																		<img
																			alt=""
																			src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/34f5976a0369969f82cb666b17aebf99.svg"
																			className="width_icon_room"
																		/>
																		<small className="ps-1 me-5">
																			1
																			Giường
																			Cỡ
																			Queen
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
																				convenient
																			) => {
																				return (
																					<CardText>
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
																				policy
																			) => {
																				return (
																					<CardText>
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
																				price
																			) => {
																				return (
																					<>
																						<CardText className="m-0">
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
																							tabindex="0"
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
																		<Button className="fw-bold btn_price">
																			Đặt
																			ngay
																		</Button>
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
export default CardRoom;
