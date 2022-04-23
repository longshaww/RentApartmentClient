import { FETCHED_LESSOR } from "../constant/constant";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	lessor: {},
};

export const detailLessorReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCHED_LESSOR:
			return {
				...state,
				lessor: action.payload,
			};
		default:
			return { ...state };
	}
};
