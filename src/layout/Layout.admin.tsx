import { Outlet } from "react-router-dom";
import Sidebar from "../feature/Admin/components/sidebar/Sidebar";

const LayoutAdmin: React.FC = () => {
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
