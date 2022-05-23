import axios from "axios";
import React, { useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarApp from "../components/Navbar";
import axiosMethod from "../utils/api";

const Layout: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const tokenParam = searchParams.get("token");
	if (tokenParam !== null) {
		localStorage.setItem("access_token", tokenParam || "");
	}

	const accessToken = localStorage.getItem("access_token");

	const requestMe = async () => {
		const res = await axios({
			url: `${process.env.REACT_APP_PROFILE_BE}api/users/me`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		console.log(res.data.data);
	};
	const { REACT_APP_LOGIN_URL } = process.env;

	if (!accessToken) {
		window.location.href = `${REACT_APP_LOGIN_URL}http://localhost:3000`;
	} else {
		requestMe();
	}

	return (
		<>
			<NavbarApp />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
