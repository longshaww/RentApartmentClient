import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../../assets/css/info.scss";
import "../../../assets/css/card.scss";
import Preferential from "../components/Preferential";
import InformationForm from "../components/information.form";
import TitleInfo from "../components/TitleInfo";
import RoomInfo from "../components/RoomInfo";
import { motion } from "framer-motion";

const Booking: React.FC = () => {
	return (
		<>
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: "100%" }}
				exit={{
					x: window.innerWidth,
					transition: { duration: 0.1 },
				}}
			>
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
			</motion.div>
		</>
	);
};
export default Booking;
