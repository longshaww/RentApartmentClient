import { SET_REQUIREMENT } from "../constant/constant";

const setRequirement = (data: any) => ({
	type: SET_REQUIREMENT,
	payload: data,
});

export { setRequirement };
