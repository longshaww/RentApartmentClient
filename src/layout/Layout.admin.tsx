import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../feature/Admin/components/sidebar/Sidebar";
import { Toast } from "../utils/toast.sweet-alert";
import { userGlobalCheck } from "../utils/user.me";

const LayoutAdmin: React.FC = () => {
	const userMe = userGlobalCheck();
	const navigate = useNavigate();
	useEffect(() => {
		if (
			localStorage.getItem("user_me") &&
			userMe.user?.type !== "PARTNER"
		) {
			navigate("/");
			Toast.fire({
				icon: "error",
				title: "Bạn không có quyền truy cập",
			});
		}
	}, []);
	return (
		<>
			<div className="responsive">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-auto">
							<Sidebar />
						</div>
						<div className="col">
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LayoutAdmin;
