import React from "react";
import DetailPricePay from "../components/DetailPricePay";
import ConfirmButtonPay from "../components/ConfirmButtonPay";
import InstallmentVoucher from "../components/InstallmentVoucher";

const PaymentCard: React.FC = () => {
	return (
		<>
			<hr />
			<InstallmentVoucher />
			<DetailPricePay />
			<ConfirmButtonPay />
		</>
	);
};
export default PaymentCard;
