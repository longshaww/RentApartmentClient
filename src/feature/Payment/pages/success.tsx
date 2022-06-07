import axios from "axios";
import { useState } from "react";
import { APP_ID, TYPE_VOUCHER } from "../../../constant/constant";
import axiosMethod from "../../../utils/api";
import { Toast } from "../../../utils/toast.sweet-alert";
import { userGlobalCheck } from "../../../utils/user.me";
import BillComponent from "../../Admin/components/Bill/bill";

const PaymentSuccess: React.FC = () => {
	const userMe = userGlobalCheck();
	const [bill, setBill] = useState<any>({});

	const userPaymentInfo = localStorage.getItem("user_info_payment") || "{}";
	const localOrder = localStorage.getItem("order_id") || "{}";
	const orderObj = JSON.parse(localOrder);

	console.log(orderObj.orderId);
	async function sendData() {
		const postBill = await axiosMethod(
			"bill",
			"post",
			JSON.parse(userPaymentInfo)
		);
		if (postBill.success) {
			localStorage.removeItem("user_info_payment");
			setBill(postBill);
		}
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
	sendData();
	return (
		<>
			{bill.success ? (
				<BillComponent userMe={userMe} bill={bill} />
			) : (
				<div>Not found</div>
			)}
		</>
	);
};

export default PaymentSuccess;
