import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../../assets/css/info.scss";
import "../../../assets/css/card.scss";
import Preferential from "../components/Preferential";
import InformationForm from "../components/information.form";
import TitleInfo from "../components/TitleInfo";
import RoomInfo from "../components/RoomInfo";

const Booking: React.FC = () => {
	return (
		<>
			<Container className="mt-5">
				<Row>
					<TitleInfo />
				</Row>
				<Row>
					<Col
						className="form"
						id="formpay"
						sm={{
							offset: 1,
							size: 7,
						}}
					>
						<Preferential />
						<InformationForm />
					</Col>
					<Col
						sm={{
							size: 3,
						}}
					>
						<RoomInfo />
					</Col>
				</Row>
			</Container>
		</>
	);
};
export default Booking;
