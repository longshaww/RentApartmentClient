import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	Button,
	Container,
	Form,
	Input,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "reactstrap";
import CardDetail from "../components/CardDetail";
import CardRoom from "../components/CardRoom";
import Convenient from "../components/Convenient";
import axiosMethod from "../../../utils/api";
import globalStateAndAction from "../../../container/global.state.action";
import { motion } from "framer-motion";
import NewApartment from "../../Admin/pages/NewApartment";

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

	const [modal, setModal] = useState(false);

	// Toggle for Modal
	const toggle = () => setModal(!modal);

	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<Container className="pt-5">
				<Container fluid="md">
					<CardDetail />
					<Button color="primary" onClick={toggle}>
						Thêm căn hộ mới
					</Button>
					<Modal
						scrollable
						centered
						size="xl"
						isOpen={modal}
						toggle={toggle}
					>
						<ModalHeader toggle={toggle}>
							Tạo căn hộ mới
						</ModalHeader>
						<ModalBody>
							<NewApartment />
						</ModalBody>
						<ModalFooter>
							<Button color="primary" onClick={toggle}>
								Okay
							</Button>
						</ModalFooter>
					</Modal>
					<CardRoom />
					<Convenient />
				</Container>
			</Container>
		</motion.div>
	);
};

export default globalStateAndAction(Detail);
