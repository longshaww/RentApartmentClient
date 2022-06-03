import { useEffect, useState } from "react";
import axiosMethod from "../../../utils/api";
import { userGlobalCheck } from "../../../utils/user.me";
import BillComponent from "../../Admin/components/Bill/bill";

export default function PaymentSuccess() {
	const userMe = userGlobalCheck();
	const [bill, setBill] = useState<any>({});

	useEffect(() => {
		const userPaymentInfo =
			localStorage.getItem("user_info_payment") || "{}";
		async function sendData() {
			const res = await axiosMethod(
				"bill",
				"post",
				JSON.parse(userPaymentInfo)
			);
			console.log(res);
			if (res.success) {
				localStorage.removeItem("user_info_payment");
				setBill(res);
			}
		}
		sendData();
	}, []);
	return (
		<>{bill.success && <BillComponent userMe={userMe} bill={bill} />}</>
	);
}
