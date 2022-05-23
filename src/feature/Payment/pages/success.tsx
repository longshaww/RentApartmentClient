import { useEffect } from "react";
import axiosMethod from "../../../utils/api";
export default function PaymentSuccess() {
	async function sendData(data: any) {
		await axiosMethod("bill", "post", data);
	}
	useEffect(() => {
		const userPaymentInfo =
			localStorage.getItem("userPaymentInfo") || "{}";
		sendData(userPaymentInfo);
		localStorage.removeItem("user_info_payment");
	}, []);
	return <h2>Success</h2>;
}
