import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import NewApartment from "../../Admin/pages/NewApartment";

const CreateApartmentModal: React.FC<any> = ({
	listApartment,
	setListApartment,
}) => {
	const [createApartmentModal, setCreateApartmentModal] = useState(false);

	// Toggle for Modal
	const toggle = () => setCreateApartmentModal(!createApartmentModal);
	return (
		<>
			<Modal
				scrollable
				centered
				size="xl"
				isOpen={createApartmentModal}
				toggle={toggle}
			>
				<ModalHeader toggle={toggle}>Tạo căn hộ mới</ModalHeader>
				<ModalBody>
					<NewApartment
						listApartment={listApartment}
						setListApartment={setListApartment}
						setModal={setCreateApartmentModal}
						modal={createApartmentModal}
					/>
				</ModalBody>
				<ModalFooter>
					<Button
						color="primary"
						type="submit"
						form="new-apartment-form"
					>
						Xác nhận
					</Button>
				</ModalFooter>
			</Modal>
			<Button color="primary" onClick={toggle}>
				Thêm căn hộ mới
			</Button>
		</>
	);
};

export default CreateApartmentModal;
