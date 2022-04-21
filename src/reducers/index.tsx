import { combineReducers } from "redux";
import { detailLessorReducer } from "./detail.lessor";
const rootReducer = combineReducers({
	detail: detailLessorReducer,
});

export default rootReducer;
