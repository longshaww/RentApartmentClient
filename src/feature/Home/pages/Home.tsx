import React from "react";
import Filter from "../components/Filter";
import Slider from "../components/Slider";
import Search from "../components/Search";
import CardHome from "../components/CardHome";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";

const Home: React.FC = () => {
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
					<div className="col-md-9">
						<CardHome />
					</div>
				</Row>
			</Container>
		</motion.div>
	);
};
export default Home;
