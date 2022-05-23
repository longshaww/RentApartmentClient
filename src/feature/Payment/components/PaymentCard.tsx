import React from "react";
import DetailPricePay from "../components/DetailPricePay";
import ConfirmButtonPay from "../components/ConfirmButtonPay";
import InstallmentVoucher from "../components/InstallmentVoucher";

const PaymentCard: React.FC = () => {
	return (
		<>
			{/* <Row>
				<Col xs="4">
					<p className="fw-bold size-title-card">
						Thẻ thanh toán
					</p>
				</Col>
				<Col xs="8">
					<ul className="d-flex p-0 justify-content-end">
						<li className="pe-3">
							<img
								src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/17/1484655630637-0dcca3761eb5910f1835f438f153bfae.png?tr=q-75"
								alt=""
								width="87"
								height="24"
							/>
						</li>
						<li className="pe-3">
							<img
								src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/06/1483707776912-1abb188266f6d5b3f2e27f4733ca32e9.png?tr=q-75"
								alt=""
								width="28"
								height="24"
							/>
						</li>
						<li className="pe-3">
							<img
								src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/06/1483707787206-abc175b224ab92a6967e24bc17c30f45.png?tr=q-75"
								alt=""
								width="22"
								height="24"
							/>
						</li>
						<li>
							<img
								src="https://ik.imagekit.io/tvlk/image/imageResource/2017/07/10/1499673365437-1e1522e5cc323e7e8a7b57b90e81dbc9.png?tr=q-75"
								alt=""
								width="32"
								height="24"
							/>
						</li>
					</ul>
				</Col>
			</Row> */}
			{/* <FormCard /> */}
			<hr />
			<InstallmentVoucher />
			<DetailPricePay />
			<ConfirmButtonPay />
		</>
	);
};
export default PaymentCard;
