import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import CardDetail from "../components/CardDetail";
import CardRoom from "../components/CardRoom";
import Convenient from "../components/Convenient";
import axiosMethod from "../../../utils/api";
import globalStateAndAction from "../../../container/global.state.action";
import { motion } from "framer-motion";

// import CardLocation from 'src/components/CardLocation';

const Detail: React.FC<{ setDetailLessor: any }> = ({ setDetailLessor }) => {
	const { id } = useParams();

	useEffect(() => {
		async function getData() {
			const data = await axiosMethod(`lessor/${id}`, "get");
			setDetailLessor(data);
		}
		getData();
	}, [id, setDetailLessor]);

	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<Container className="pt-5">
				<Container fluid="md">
					<CardDetail />
					<CardRoom />
					<Convenient />
				</Container>
			</Container>
		</motion.div>
	);
};

export default globalStateAndAction(Detail);
