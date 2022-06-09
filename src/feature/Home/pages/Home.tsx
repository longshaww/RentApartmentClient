import React from "react";
import Filter from "../components/Filter";
import Slider from "../components/Slider";
import Search from "../components/Search";
import CardHome from "../components/CardHome";
import { Container, Row } from "reactstrap";
import { userGlobalCheck } from "../../../utils/user.me";
import Sidebar from "../../Admin/components/sidebar/Sidebar";

const Home: React.FC = () => {
	const userMe = userGlobalCheck();

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
							<Sidebar />
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
