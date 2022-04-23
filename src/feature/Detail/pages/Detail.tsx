import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import CardDetail from "../components/CardDetail";
import CardRoom from "../components/CardRoom";
import Convenient from "../components/Convenient";
import axiosMethod from "../../../utils/api";
import globalStateAndAction from "../../../container/global.state.action";

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
		<Container className="pt-5">
			<Container fluid="md">
				<CardDetail />
				{/* <CardLocation /> */}
				<CardRoom />
				<Convenient />
			</Container>
		</Container>
	);
};

export default globalStateAndAction(Detail);
