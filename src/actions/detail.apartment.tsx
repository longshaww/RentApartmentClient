import { FETCHED_APARTMENT } from "../constant/constant";

const setDetailApartment = (data: any) => ({
	type: FETCHED_APARTMENT,
	payload: data,
});

export { setDetailApartment };
