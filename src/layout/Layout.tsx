import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarApp from "../components/Navbar";

const Layout: React.FC = () => {
	return (
		<>
			<NavbarApp />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
