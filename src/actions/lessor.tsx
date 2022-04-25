import { FETCHED_LIST_LESSOR } from "../constant/constant";

const setListLessor = (data: any) => ({
	type: FETCHED_LIST_LESSOR,
	payload: data,
});

export { setListLessor };
