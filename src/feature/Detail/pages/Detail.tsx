import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import CardDetail from "../components/LessorDetail";
import CardRoom from "../components/ListRoom";
import axiosMethod from "../../../utils/api";
import globalStateAndAction from "../../../container/global.state.action";

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
		<>
			<Container className="pt-5">
				<Container fluid="md">
					<CardDetail />
					<CardRoom />
				</Container>
			</Container>
		</>
	);
};

export default globalStateAndAction(Detail);
