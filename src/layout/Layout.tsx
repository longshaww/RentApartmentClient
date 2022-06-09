import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarApp from "../components/Navbar";

const Layout: React.FC = () => {
	const navigate = useNavigate();
	useEffect(() => {
		const timer = setTimeout(() => {
			if (!localStorage.getItem("access_token")) {
				window.location.href = `${process.env.REACT_APP_LOGIN_URL}${window.location.origin}/me`;
			}
			if (!localStorage.getItem("user_me")) {
				navigate("/me");
			}
		}, 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<NavbarApp />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
