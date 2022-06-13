import React, { useEffect, useState } from "react";
import {
	Card,
	Form,
	CardTitle,
	Input,
	CardText,
	Row,
	Col,
	FormGroup,
	Label,
	Container,
	CardSubtitle,
	Button,
	FormFeedback,
} from "reactstrap";
import globalStateAndAction from "../../../container/global.state.action";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userGlobalCheck } from "../../../utils/user.me";
import { APP_ID, TYPE_VOUCHER } from "../../../constant/constant";
import { formatPrice } from "../../../utils/format.price";
import { Toast } from "../../../utils/toast.sweet-alert";
import { v4 as uuid } from "uuid";

const InformationForm: React.FC<{
	detailApartment: any;
	checkInDate: any;
	checkOutDate: any;
}> = ({ detailApartment, checkInDate, checkOutDate }) => {
	const navigate = useNavigate();
	const userMe = userGlobalCheck();
	//Info handling
	const [inputs, setInputs] = useState<any>({
		ten: userMe.user?.name,
		sdt: userMe.user?.phone,
		email: userMe.user?.email,
	});
	const [errors, setErrors] = useState<any>({
		ten: false,
		sdt: false,
		email: false,
		requirement: false,
	});
	const [vouchers, setVouchers] = useState<any>({
		listVoucher: [],
		orderId: "",
	});

	const [selectVoucher, setSelectVoucher] = useState<any>("Chọn voucher");
	//PriceDetails handling
	const thue = 10;
	const [total, setTotal] = useState<any>();

	let gia: any;
	if (detailApartment) {
		gia = detailApartment.gia;
	}
	let tienThue = (gia * thue) / 100;
	let thanhTien = gia + tienThue;
	useEffect(() => {
		if (gia) {
			setTotal(thanhTien);
		}
	}, [gia]);

	//Xử lý inputs
	const handleChange = (event: any) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values: any) => ({ ...values, [name]: value }));
	};

	const guests = [
		{
			title: "Tôi là khách lưu trú",
			id: "flexRadioDefault1",
			checked: true,
		},
		{
			title: "Tôi đang đặt cho người khác",
			id: "flexRadioDefault2",
			checked: false,
		},
	];

	const requirements: string[] = [
		"Phòng không hút thuốc",
		"Phòng liên thông",
		"Tầng lầu",
		"Loại giường",
		"Giờ nhận phòng",
		"Giờ trả phòng",
		"Khác",
	];

	//Requirement handling
	const [checkbox, setCheckbox] = useState<any>([]);
	const handleCheckboxChange = (e: any) => {
		setCheckbox((values: any) => {
			const isChecked = checkbox.includes(e.target.value);
			if (isChecked) {
				return checkbox.filter(
					(item: any) => item !== e.target.value
				);
			} else {
				return [...values, e.target.value];
			}
		});
	};

	const stringCheckbox = checkbox.join(",").toString();

	//get voucher
	useEffect(() => {
		async function getVoucher() {
			if (detailApartment.maPartner) {
				const res = await axios.get(
					`${process.env.REACT_APP_VOUCHER_BE}eligible?typeVoucher=apart`,
					{
						headers: {
							user_id: userMe.user!.userId,
							partner_id: detailApartment.maPartner,
							app_id: APP_ID,
						},
					}
				);
				if (res.status === 200) {
					setVouchers({
						...vouchers,
						listVoucher: res.data.data.vouchers,
					});
				}
			}
		}
		getVoucher();
	}, [detailApartment && detailApartment.maPartner]);

	//handle voucher change

	console.log(selectVoucher);
	const onVoucherSelectChange = async (e: any) => {
		const value = e.target.value;
		setSelectVoucher(value);
		if (value === "Chọn voucher") {
			if (gia) {
				setTotal(thanhTien);
				setVouchers({ ...vouchers, orderId: "" });
			}
			return;
		}

		try {
			const checkVoucher = await axios.get(
				`${
					process.env.REACT_APP_VOUCHER_BE
				}check-condition?amount=${
					total * 1000
				}&code=${value}&typeVoucher=${TYPE_VOUCHER}`,
				{
					headers: {
						user_id: userMe.user!.userId,
						partner_id: detailApartment.maPartner,
					},
				}
			);
			if (checkVoucher.status === 200) {
				setTotal(total - checkVoucher.data.data.amount / 1000);

				const applyVoucher: any = await axios.post(
					`${process.env.REACT_APP_VOUCHER_BE}pre-order`,
					{
						code: value,
						typeVoucher: TYPE_VOUCHER,
						transactionId: uuid(),
						amount: total * 1000,
					},
					{
						headers: {
							user_id: userMe.user!.userId,
							partner_id: detailApartment.maPartner,
						},
					}
				);
				if (applyVoucher.status === 200) {
					setVouchers({
						...vouchers,
						orderId: applyVoucher.data.data.orderId,
					});
					Toast.fire({
						icon: "success",
						title: "Áp dụng voucher thành công",
					});
				}
			}
		} catch (err: any) {
			if (err) {
				Toast.fire({
					icon: "error",
					title: "Mã đang được áp dụng",
				});
				setSelectVoucher("Chọn voucher");
			}
		}
	};

	const onCancelVoucherClick = async () => {
		if (!vouchers.orderId) {
			Toast.fire({
				icon: "error",
				title: "Không có voucher nào được chọn",
			});
			return;
		}
		const cancelVoucher = await axios.post(
			`${process.env.REACT_APP_VOUCHER_BE}cancel-order`,
			{
				typeVoucher: TYPE_VOUCHER,
				orderId: vouchers.orderId,
			},
			{
				headers: {
					user_id: userMe.user!.userId,
					partner_id: detailApartment.maPartner,
				},
			}
		);
		if (cancelVoucher.status === 200) {
			Toast.fire({
				icon: "success",
				title: "Hủy voucher thành công",
			});
			setVouchers({
				...vouchers,
				orderId: "",
			});
			setTotal(thanhTien);
			setSelectVoucher("Chọn voucher");
		}
	};
	//form Submit
	const MySwal = withReactContent(Swal);
	const regex = {
		sdt: /^[0-9-+]{10,12}$/g,
		email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
	};
	//Handle Submit
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (
			!inputs.ten ||
			!inputs.email ||
			!regex.email.test(inputs.email) ||
			!inputs.sdt ||
			!regex.sdt.test(inputs.sdt) ||
			!stringCheckbox
		) {
			setErrors({
				...errors,
				ten: true,
				email: true,
				sdt: true,
				requirement: true,
			});
			return MySwal.fire({
				icon: "error",
				title: "Oops...",
				text: "Vui lòng kiểm tra lại thông tin !",
			});
		}

		const data = {
			...inputs,
			maKhachHang: userMe.user!.userId,
			yeuCau: stringCheckbox,
			tongTienCanHo: gia,
			soLuongCanHo: 1,
			thue,
			ngayTao: new Date(),
			tongTien: total,
			maBct: detailApartment.maBct,
			maCanHo: detailApartment.maCanHo,
			thoiGianNhan: checkInDate,
			thoiGianTra: checkOutDate,
			trangThai: true,
		};
		await MySwal.fire({
			title: <p>Đang xử lý</p>,
			didOpen: () => {
				MySwal.showLoading();
				localStorage.setItem(
					"user_info_payment",
					JSON.stringify(data)
				);
				if (vouchers.orderId && detailApartment.maPartner) {
					localStorage.setItem(
						"order_id",
						JSON.stringify({
							orderId: vouchers.orderId,
							maPartner: detailApartment.maPartner,
						})
					);
				}
				if (!vouchers.orderId) {
					localStorage.setItem(
						"order_id",
						JSON.stringify({
							maPartner: detailApartment.maPartner,
						})
					);
				}
			},
			timer: 1000,
		});
		await MySwal.fire({
			title: "Thành công",
			icon: "success",
			didOpen: () => {
				MySwal.showLoading();
			},
			timer: 1000,
		});
		await MySwal.fire({
			title: "Chuyển đến trang thanh toán",
			didOpen: () => {
				MySwal.showLoading();
			},
			timer: 1000,
		});

		navigate(`payment`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="your_info mb-4">
				<div className="mb-3 fw-bold">Thông tin của bạn</div>
				<Card className="shadow">
					<Form className="card-body pb-0 px-0">
						<div className="mb-3 px-3">
							<CardTitle tag="h6">
								Tên người liên hệ:
							</CardTitle>
							<Input
								name="ten"
								className={inputs.ten && "is-valid"}
								invalid={errors.ten}
								value={inputs.ten}
								onChange={handleChange}
							/>
							<FormFeedback invalid>
								Bạn cần phải nhập tên !
							</FormFeedback>
							<CardText>
								<small className="text-muted">
									*Nhập tên như trên CMND/hộ chiếu
									(không dấu)
								</small>
							</CardText>
						</div>
						<Row className="px-3">
							<Col xs="7" className="">
								<FormGroup className="col">
									<Label
										for="Select"
										className="fw-bold"
									>
										Số di động
									</Label>
									<Row className="d-flex">
										<Col xs="5">
											<Input
												id="Select"
												name="select"
												type="select"
											>
												<option>
													(VN)+84
												</option>
												<option>
													(US)+1
												</option>
												<option>
													(China)+86
												</option>
												<option>
													(ThaiLand)+66
												</option>
											</Input>
										</Col>
										<Col xs="7">
											<Input
												invalid={errors.sdt}
												name="sdt"
												className={
													inputs.sdt &&
													"is-valid"
												}
												value={inputs.sdt}
												onChange={
													handleChange
												}
												placeholder=""
												type="text"
											/>
											<FormFeedback invalid>
												Bạn cần phải nhập
												sđt !
											</FormFeedback>
										</Col>
									</Row>
								</FormGroup>
							</Col>
							<Col xs="5">
								<FormGroup>
									<Label
										for="exampleEmail"
										className="fw-bold"
									>
										Email
									</Label>
									<Input
										name="email"
										onChange={handleChange}
										value={inputs.email}
										invalid={errors.email}
										className={
											inputs.email &&
											"is-valid"
										}
										placeholder="VD: email@example.com"
										type="email"
									/>
									<FormFeedback invalid>
										Bạn cần phải nhập email !
									</FormFeedback>
								</FormGroup>
							</Col>
						</Row>
						<FormGroup
							check
							className="d-flex justify-content-around bg_check-date pt-3 pb-2 m-0"
						>
							{guests.map((guest) => {
								return (
									<div>
										<Input
											className="form-check-input"
											type="radio"
											name="flexRadioDefault"
											id={guest.id}
											checked={guest.checked}
										/>
										<Label
											className="form-check-label"
											htmlFor={guest.id}
										>
											{guest.title}
										</Label>
									</div>
								);
							})}
						</FormGroup>
					</Form>
				</Card>
			</div>

			<div className="requirement mb-4">
				<div className="mb-3 fw-bold">Yêu cầu đặt biệt</div>
				<Card className="shadow">
					<Form className="card-body pt-0 px-0">
						<CardText className="bg_check-date p-3">
							<small>
								Bạn có yêu cầu đặc biệt? Gửi yêu cầu và
								khách sạn sẽ cố gắng đáp ứng nguyện vọng
								của bạn. (Xin lưu ý yêu cầu đặc biệt
								không được bảo đảm trước và có thể thu
								phí)
							</small>
						</CardText>
						<Container className="px-3 pt-2">
							<Form className="px-3 row row-cols-2">
								{requirements.map((requirement) => {
									return (
										<FormGroup check>
											<Input
												invalid={
													errors.requirement
												}
												onChange={
													handleCheckboxChange
												}
												value={requirement}
												type="checkbox"
											/>
											<Label check>
												{requirement}
											</Label>
										</FormGroup>
									);
								})}
							</Form>
						</Container>
					</Form>
				</Card>
			</div>

			<div className="polycy_cancel mb-4">
				<div className="mb-3 fw-bold">Chính sách huỷ đặt phòng</div>
				<Card className="shadow">
					<CardTitle
						tag="h6"
						className="px-3 pt-3 fw-bold text-success"
					>
						Chính sách hủy đặt phòng
					</CardTitle>
					<hr />
					<CardSubtitle className="text-muted px-3 pb-3">
						Đặt phòng này không được hoàn tiền.
					</CardSubtitle>
				</Card>
			</div>
			<div className="price_details mb-5 ">
				<div className="mb-3 fw-bold">Chi tiết giá</div>
				<Card className="shadow mb-3 p-3">
					<Label for="voucher-select" className="fw-bold">
						Voucher
					</Label>
					<Input
						type="select"
						id="voucher-select"
						className="mb-3 form-select"
						value={selectVoucher}
						onChange={onVoucherSelectChange}
					>
						<option>Chọn voucher</option>
						{vouchers.listVoucher.length > 0 ? (
							vouchers.listVoucher.map((voucher: any) => {
								return (
									<option
										value={voucher.voucherCode}
									>
										{voucher.title}
									</option>
								);
							})
						) : (
							<option>Voucher không khả dụng</option>
						)}
					</Input>
					<div className="text-center">
						<Button
							className="w-25"
							color="primary"
							onClick={onCancelVoucherClick}
						>
							Hủy voucher
						</Button>
					</div>
				</Card>
				{detailApartment && (
					<Card className="shadow">
						<CardTitle
							tag="h6"
							className="px-3 pt-3 fw-bold d-flex justify-content-between m-0"
						>
							<CardText className="m-0">
								Thành tiền
							</CardText>
							<CardText>
								{total && formatPrice(total)}
							</CardText>
						</CardTitle>
						<hr />
						<CardTitle className="p-3 d-flex justify-content-between m-0">
							<CardText className="m-0">
								(1x) {detailApartment.tenCanHo} (1 đêm)
							</CardText>
							<CardText>
								{detailApartment.gia},000 VNĐ
							</CardText>
						</CardTitle>
						<CardTitle className="p-3 d-flex justify-content-between m-0">
							<CardText className="m-0">Thuế</CardText>
							<CardText>10%</CardText>
						</CardTitle>
					</Card>
				)}
			</div>
			<div className="text-end mb-5">
				<Button
					type="submit"
					value="Submit"
					className="fw-bold btn_price px-4 py-2"
				>
					Xác nhận
				</Button>
			</div>
		</form>
	);
};
export default globalStateAndAction(InformationForm);
