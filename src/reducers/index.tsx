import { combineReducers } from "redux";
import { detailLessorReducer } from "./detail.lessor";
import { listLessorReducer } from "./lessor";
import { detailApartmentReducer } from "./detail.apartment";
import { dateChoosenReducer } from "./date.choosen";

const rootReducer = combineReducers({
	detailLessor: detailLessorReducer,
	listLessor: listLessorReducer,
	detailApartment: detailApartmentReducer,
	dateChoosen: dateChoosenReducer,
});

export default rootReducer;
