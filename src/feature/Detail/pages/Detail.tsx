import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import CardDetail from "../components/CardDetail";
import CardRoom from "../components/CardRoom";
import Convenient from "../components/Convenient";
import axiosMethod from "../../../utils/api";

// import CardLocation from 'src/components/CardLocation';

const Detail: React.FC = () => {
	const [dataDetail, setDataDetail] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		async function getData() {
			const data = await axiosMethod(`lessor/${id}`, "get");
			setDataDetail(data);
		}
		getData();
	}, [id]);

	return (
		<Container className="pt-5">
			<Container fluid="md">
				<CardDetail dataDetail={dataDetail} />
				{/* <CardLocation /> */}
				<CardRoom dataDetail={dataDetail} />
				<Convenient />
			</Container>
		</Container>
	);
};

export default Detail;
