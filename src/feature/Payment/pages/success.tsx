import axios from "axios";
import { useEffect, useState } from "react";
import { APP_ID, TYPE_VOUCHER } from "../../../constant/constant";
import axiosMethod from "../../../utils/api";
import { Toast } from "../../../utils/toast.sweet-alert";
import { userGlobalCheck } from "../../../utils/user.me";
import BillComponent from "../../Admin/components/Bill/bill";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const PaymentSuccess: React.FC = () => {
	const userMe = userGlobalCheck();
	const [bill, setBill] = useState<any>({});

	const userPaymentInfo = localStorage.getItem("user_info_payment") || "{}";
	const localOrder = localStorage.getItem("order_id") || "{}";
	const orderObj = JSON.parse(localOrder);

	function caculateReward(tongTien: number) {
		let award = 0;
		if (tongTien >= 100) {
			award = 1;
		}
		if (tongTien >= 500) {
			award = 2;
		}
		if (tongTien >= 1000) {
			award = 3;
		}
		return award;
	}

	async function sendData() {
		const postBill = await axiosMethod(
			"bill",
			"post",
			JSON.parse(userPaymentInfo)
		);
		if (postBill.success) {
			localStorage.removeItem("user_info_payment");
			setBill(postBill);
			const customizeData: any = {
				total: postBill.body.tongTien,
				reward: caculateReward(postBill.body.tongTien),
				details: [
					{
						productName: postBill.body.tenCanHo,
						quantity: postBill.body.soLuongCanHo,
						thumbnail: postBill.body.hinhAnhBcts,
						link: "test",
					},
				],
				userId: userMe.user!.userId,
				partnerId: orderObj.maPartner,
			};
			if (orderObj.orderId) {
				customizeData.voucherCode = orderObj.orderId;
			}
			const sendReward = await axios.post(
				`${process.env.REACT_APP_PROFILE_BE}api/orders`,
				customizeData
			);
			if (sendReward.status === 201) {
				Toast.fire({
					icon: "success",
					title: "Tích điểm thành công",
				});
			}
		}
		if (orderObj.orderId) {
			const updateVoucherState = await axios.put(
				`${process.env.REACT_APP_VOUCHER_BE}state`,
				{
					orderId: orderObj.orderId,
					typeVoucher: TYPE_VOUCHER,
				},
				{
					headers: {
						user_id: userMe.user!.userId,
						partner_id: orderObj.maPartner,
						app_id: APP_ID,
					},
				}
			);
			if (updateVoucherState.status === 200) {
				Toast.fire({
					icon: "success",
					title: "Cập nhật trang thái voucher thành công",
				});
				localStorage.removeItem("orderId");
			}
		}
	}

	useEffect(() => {
		sendData();
	}, []);

	return (
		<>
			{bill.success ? (
				<>
					<BillComponent userMe={userMe} bill={bill} />
					<div className="text-center">
						<Link to="/" className="btn btn-primary">
							Hoàn tất
						</Link>
					</div>
				</>
			) : (
				<div>Not found</div>
			)}
		</>
	);
};

export default PaymentSuccess;
