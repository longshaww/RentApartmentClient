import React from "react";
import DetailPricePay from "../components/DetailPricePay";
import InstallmentVoucher from "../components/InstallmentVoucher";

const PaymentCard: React.FC = () => {
	return (
		<>
			<hr />
			<InstallmentVoucher />
			<DetailPricePay />
		</>
	);
};
export default PaymentCard;
