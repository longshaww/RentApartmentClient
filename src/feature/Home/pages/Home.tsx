import React from "react";
import Filter from "../components/Filter";
import Slider from "../components/Slider";
import Search from "../components/Search";
import CardHome from "../components/CardHome";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";

const Home: React.FC = () => {
	const accessToken = localStorage.getItem("access_token");
	if (!accessToken) {
		window.location.href = `${process.env.REACT_APP_LOGIN_URL}http://${window.location.host}/me`;
	}

	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<Container>
				<Slider />
				<Search />
			</Container>
			<Container>
				<Row>
					<div className="col-md-3 mt-3">
						<Filter />
					</div>
					<div className="col-md-9 mt-3">
						<CardHome />
					</div>
				</Row>
			</Container>
		</motion.div>
	);
};
export default Home;
