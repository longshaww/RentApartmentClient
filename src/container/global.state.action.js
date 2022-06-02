import { connect } from "react-redux";
import { setDetailLessor } from "../actions/detail.lessor";
import { setListLessor } from "../actions/lessor";
import { setDetailApartment } from "../actions/detail.apartment";
import { setCheckInDate, setCheckOutDate } from "../actions/date.choosen";
import { setLessorEditId, setEditLessorModal } from "../actions/admin";

export default function globalStateAndAction(name) {
	const mapStateToProps = (state) => {
		return {
			detailLessor: state.detailLessor.lessor,
			listLessor: state.listLessor.listLessor,
			detailApartment: state.detailApartment.apartment,
			checkInDate: state.dateChoosen.checkInDate,
			checkOutDate: state.dateChoosen.checkOutDate,
			lessorEditID: state.admin.lessorEditID,
			editLessorModal: state.admin.editLessorModal,
		};
	};

	const mapActionToProps = (dispatch) => ({
		setDetailLessor: (data) => dispatch(setDetailLessor(data)),
		setListLessor: (data) => dispatch(setListLessor(data)),
		setDetailApartment: (data) => dispatch(setDetailApartment(data)),
		setCheckInDate: (data) => dispatch(setCheckInDate(data)),
		setCheckOutDate: (data) => dispatch(setCheckOutDate(data)),
		setLessorEditId: (data) => dispatch(setLessorEditId(data)),
		setEditLessorModal: () => dispatch(setEditLessorModal()),
	});
	return connect(mapStateToProps, mapActionToProps)(name);
}
