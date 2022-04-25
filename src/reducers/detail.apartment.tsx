import { FETCHED_APARTMENT } from "../constant/constant";

const initialState = {
	apartment: {},
};

export const detailApartmentReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case FETCHED_APARTMENT:
			return {
				...state,
				apartment: action.payload,
			};
		default:
			return { ...state };
	}
};
