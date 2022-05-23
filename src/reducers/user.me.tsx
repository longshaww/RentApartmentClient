import { FETCHED_USER } from "../constant/constant";

const initialState = {
	userMe: {},
};

export const userMeReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCHED_USER:
			return {
				...state,
				userMe: action.payload,
			};

		default:
			return { ...state };
	}
};
