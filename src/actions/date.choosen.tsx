import { SET_CHECK_IN_DATE, SET_CHECK_OUT_DATE } from "../constant/constant";

const setCheckInDate = (data: any) => ({
	type: SET_CHECK_IN_DATE,
	payload: data,
});

const setCheckOutDate = (data: any) => ({
	type: SET_CHECK_OUT_DATE,
	payload: data,
});

export { setCheckInDate, setCheckOutDate };
