import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import globalStateAndAction from "../../../container/global.state.action";
import EditLessor from "../../Admin/pages/EditLessor";

const EditLessorModal: React.FC<any> = ({
	editLessorModal,
	setEditLessorModal,
	lessorEditID,
}) => {
	return (
		<>
			<Modal
				scrollable
				centered
				size="xl"
				isOpen={editLessorModal}
				toggle={setEditLessorModal}
			>
				<ModalHeader toggle={setEditLessorModal}>
					Sửa bên cho thuê {lessorEditID}
				</ModalHeader>
				<ModalBody>
					<EditLessor />
				</ModalBody>
				<ModalFooter>
					<Button
						color="primary"
						type="submit"
						form="edit-lessor-form"
					>
						Xác nhận
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default globalStateAndAction(EditLessorModal);
