import { FETCHED_USER } from "../constant/constant";

const setUserMe = (data: any) => ({
	type: FETCHED_USER,
	payload: data,
});

export { setUserMe };
