import React from "react";
import Filter from "../components/Filter";
import Slider from "../components/Slider";
import Search from "../components/Search";
import CardHome from "../components/CardHome";
import { Container, Row } from "reactstrap";

const Home: React.FC = () => {
	return (
		<>
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
		</>
	);
};
export default Home;
