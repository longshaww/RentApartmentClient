import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../assets/css/bill.detail.css";
import axiosMethod from "../../../utils/api";
import { userGlobalCheck } from "../../../utils/user.me";
import BillComponent from "../components/Bill/bill";

const BillDetail: React.FC = () => {
	const userMe = userGlobalCheck();
	const params = useParams();
	const { id } = params;
	const [bill, setBill] = useState<any>({});

	useEffect(() => {
		async function getBill() {
			const res = await axiosMethod(`bill/${id}`, "get");
			if (res.success) {
				setBill(res);
			}
		}
		getBill();
	}, []);

	return (
		<>{bill.success && <BillComponent userMe={userMe} bill={bill} />}</>
	);
};
export default BillDetail;
