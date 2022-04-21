import { useEffect } from "react";
import axiosMethod from "../utils/api";

import { FETCHED_LESSOR } from "../constant/constant";

const setDetailLessor = (data: any) => ({
	type: FETCHED_LESSOR,
	payload: data,
});

const fetchDetailLessor = (endpoint: any) => async (dispatch: any) => {
	useEffect(() => {
		async function fetchData() {
			try {
				const data = await axiosMethod(endpoint, "GET");
				dispatch(setDetailLessor(data));
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [dispatch]);
};

export { fetchDetailLessor };
