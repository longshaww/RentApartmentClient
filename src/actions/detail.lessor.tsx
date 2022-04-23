import { FETCHED_LESSOR } from "../constant/constant";

const setDetailLessor = (data: any) => ({
	type: FETCHED_LESSOR,
	payload: data,
});

export { setDetailLessor };
