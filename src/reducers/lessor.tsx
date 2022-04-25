import { FETCHED_LIST_LESSOR } from "../constant/constant";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	listLessor: [],
};

export const listLessorReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCHED_LIST_LESSOR:
			return {
				...state,
				listLessor: action.payload,
			};
		default:
			return { ...state };
	}
};
