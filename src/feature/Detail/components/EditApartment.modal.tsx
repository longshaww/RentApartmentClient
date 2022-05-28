import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import EditApartment from "../../Admin/pages/EditApartment";

const EditApartmentModal: React.FC<any> = ({
	idRoom,
	listApartment,
	setListApartment,
	editApartmentModal,
	setEditApartmentModal,
}) => {
	const toggle = () => {
		setEditApartmentModal(!editApartmentModal);
	};
	return (
		<>
			<Modal
				scrollable
				centered
				size="xl"
				isOpen={editApartmentModal}
				toggle={toggle}
			>
				<ModalHeader toggle={toggle}>
					Thay đổi thông tin căn hộ {idRoom}
				</ModalHeader>
				<ModalBody>
					<EditApartment
						idRoom={idRoom}
						editApartmentModal={editApartmentModal}
						setEditApartmentModal={setEditApartmentModal}
						listApartment={listApartment}
						setListApartment={setListApartment}
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
		</>
	);
};

export default EditApartmentModal;
