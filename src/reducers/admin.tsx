import {
	SET_LESSOR_EDIT_ID,
	SET_EDIT_LESSOR_MODAL,
} from "../constant/constant";

const initialState = {
	lessorEditID: "",
	editLessorModal: false,
};

export const adminReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_LESSOR_EDIT_ID:
			return {
				...state,
				lessorEditID: action.payload,
			};
		case SET_EDIT_LESSOR_MODAL:
			return {
				...state,
				editLessorModal: !state.editLessorModal,
			};
		default:
			return { ...state };
	}
};
