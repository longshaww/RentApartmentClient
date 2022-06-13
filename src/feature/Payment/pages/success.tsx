import axios from "axios";
import { useEffect, useState } from "react";
import { APP_ID, SERVICE_CODE, TYPE_VOUCHER } from "../../../constant/constant";
import axiosMethod from "../../../utils/api";
import { Toast } from "../../../utils/toast.sweet-alert";
import { userGlobalCheck } from "../../../utils/user.me";
import BillComponent from "../../Admin/components/Bill/bill";
import { Link, useSearchParams } from "react-router-dom";
import { checkImageString } from "../../../utils/check.image";

const PaymentSuccess: React.FC = () => {
	const userMe = userGlobalCheck();
	const [bill, setBill] = useState<any>({});
	const [searchParams, setSearchParams] = useSearchParams();
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
		const success = [];
		const errors = [];
		if (!JSON.parse(userPaymentInfo).tongTien) {
			return;
		}
		const postBill = await axiosMethod(
			"bill",
			"post",
			JSON.parse(userPaymentInfo)
		);
		if (postBill.success) {
			localStorage.removeItem("user_info_payment");
			setBill(postBill);
			setSearchParams({ billId: postBill.body.id });

			if (userMe.user?.type !== "USER") {
				return Toast.fire({
					icon: "warning",
					title: "Partner không được tích điểm theo quy định",
				});
			}
			const customizeData: any = {
				total: postBill.body.tongTien,
				reward: caculateReward(postBill.body.tongTien) * 1000,
				details: [
					{
						productName: postBill.body.tenCanHo,
						quantity: postBill.body.soLuongCanHo,
						thumbnail: checkImageString(
							postBill.body.hinhAnhBcts
						),
						price: postBill.body.tongTienCanHo * 1000,
						link: `${process.env.REACT_APP_FE_URL}${postBill.body.maBct}`,
					},
				],
				userId: userMe.user!.userId,
				partnerId: orderObj.maPartner,
			};
			if (orderObj.orderId) {
				customizeData.voucherCode = orderObj.orderId;
			}
			const sendReward: any = await axios.post(
				`${process.env.REACT_APP_PROFILE_BE}api/orders`,
				customizeData,
				{
					headers: {
						service_code: SERVICE_CODE,
					},
				}
			);
			if (sendReward.data.success) {
				success.push("Tích điểm thành công");
			} else {
				errors.push("Lỗi tích điểm");
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
				success.push("Cập nhật trang thái voucher thành công");
				localStorage.removeItem("orderId");
			} else {
				errors.push("Lỗi cập nhật trạng thái voucher");
			}
		}
		if (success.length) {
			Toast.fire({
				icon: "success",
				title: success.join(",").toString(),
			});
		}
		if (errors.length) {
			Toast.fire({
				icon: "error",
				title: errors.join(",").toString(),
			});
		}
	}

	async function reloadBill() {
		const billRes = await axiosMethod(
			`bill/${searchParams.get("billId")}`,
			"get"
		);
		setBill(billRes);
	}
	useEffect(() => {
		if (!JSON.parse(userPaymentInfo).tongTien) {
			reloadBill();
		}
		sendData();
	}, []);

	return (
		<>
			{bill && bill.success ? (
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
