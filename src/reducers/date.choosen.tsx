import { SET_CHECK_IN_DATE, SET_CHECK_OUT_DATE } from "../constant/constant";
import moment from "moment";

const initialState = {
	checkInDate: moment(new Date()).format("LL"),
	checkOutDate: moment(new Date()).add(1, "days").format("LL"),
};

export const dateChoosenReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_CHECK_IN_DATE:
			return {
				...state,
				checkInDate: action.payload,
			};
		case SET_CHECK_OUT_DATE:
			return {
				...state,
				checkOutDate: action.payload,
			};
		default:
			return { ...state };
	}
};
