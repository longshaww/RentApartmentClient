import { Outlet } from "react-router-dom";
import Sidebar from "../feature/Admin/components/sidebar/Sidebar";
import Topbar from "../feature/Admin/components/topbar/Topbar";

const LayoutAdmin: React.FC = () => {
	return (
		<>
			<Topbar />
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
