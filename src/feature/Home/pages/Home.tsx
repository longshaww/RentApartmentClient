import React from "react";
import Filter from "../components/Filter";
import Slider from "../components/Slider";
import Search from "../components/Search";
import CardHome from "../components/CardHome";
import { Container, Row } from "reactstrap";
import { userGlobalCheck } from "../../../utils/user.me";
import LayoutAdmin from "../../../layout/Layout.admin";

const Home: React.FC = () => {
	const userMe = userGlobalCheck();
	const accessToken = localStorage.getItem("access_token");
	if (!accessToken) {
		window.location.href = `${process.env.REACT_APP_LOGIN_URL}http://${window.location.host}/me`;
	}

	return (
		<>
			<Container>
				<Slider />
				<Search />
			</Container>
			<Container>
				<Row>
					<div className="col-md-3 mt-3">
						{userMe.user!.type === "PARTNER" ? (
							<LayoutAdmin />
						) : (
							<Filter />
						)}
					</div>
					<div className="col-md mt-3">
						<CardHome />
					</div>
				</Row>
			</Container>
		</>
	);
};
export default Home;
