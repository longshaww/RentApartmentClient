import { combineReducers } from "redux";
import { detailLessorReducer } from "./detail.lessor";
import { listLessorReducer } from "./lessor";
import { detailApartmentReducer } from "./detail.apartment";
import { dateChoosenReducer } from "./date.choosen";
import { billInformationReducer } from "./bill.information";
import { userMeReducer } from "./user.me";

const rootReducer = combineReducers({
	detailLessor: detailLessorReducer,
	listLessor: listLessorReducer,
	detailApartment: detailApartmentReducer,
	dateChoosen: dateChoosenReducer,
	billInformation: billInformationReducer,
	userMe: userMeReducer,
});

export default rootReducer;
