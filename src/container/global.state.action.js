import { connect } from "react-redux";
import { setDetailLessor } from "../actions/detail.lessor";

export default function globalStateAndAction(name) {
	const mapStateToProps = (state) => {
		return {
			detail: state.detail.lessor,
		};
	};

	const mapActionToProps = (dispatch) => ({
		setDetailLessor: (data) => dispatch(setDetailLessor(data)),
	});
	return connect(mapStateToProps, mapActionToProps)(name);
}
