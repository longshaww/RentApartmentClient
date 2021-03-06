import "./sidebar.css";
import {
	LineStyle,
	Timeline,
	PermIdentity,
	Storefront,
	AttachMoney,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<div className="sidebar shadow px-4 pt-4">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/" className="link">
							<li className="sidebarListItem active">
								<LineStyle className="sidebarIcon" />
								Home
							</li>
						</Link>
						<Link to="/admin" className="link">
							<li className="sidebarListItem">
								<Timeline className="sidebarIcon" />
								Analytics
							</li>
						</Link>
					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						<Link to="/admin/user" className="link">
							<li className="sidebarListItem">
								<PermIdentity className="sidebarIcon" />
								Users
							</li>
						</Link>
						<Link to="/admin/newLessor" className="link">
							<li className="sidebarListItem">
								<Storefront className="sidebarIcon" />
								New Lessor
							</li>
						</Link>
						<Link to="/admin/transactions" className="link">
							<li className="sidebarListItem">
								<AttachMoney className="sidebarIcon" />
								Transactions
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}
