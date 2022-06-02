import {
	SET_LESSOR_EDIT_ID,
	SET_EDIT_LESSOR_MODAL,
} from "../constant/constant";

const setLessorEditId = (data: any) => ({
	type: SET_LESSOR_EDIT_ID,
	payload: data,
});

const setEditLessorModal = () => ({
	type: SET_EDIT_LESSOR_MODAL,
});

export { setLessorEditId, setEditLessorModal };
