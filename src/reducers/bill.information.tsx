import { SET_REQUIREMENT } from "../constant/constant";

const initialState = {
	requirement: [],
};

export const billInformationReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_REQUIREMENT:
			return {
				...state,
				requirement: [...state.requirement, action.payload],
			};

		default:
			return { ...state };
	}
};
