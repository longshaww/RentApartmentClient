import { BsSearch } from "react-icons/bs";
import "../../../assets/css/app.scss";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/lab";
import globalStateAndAction from "../../../container/global.state.action";
import axiosMethod from "../../../utils/api";
import moment from "moment";
import { useSearchParams } from "react-router-dom";

import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
	Box,
} from "@mui/material";
import { userGlobalCheck } from "../../../utils/user.me";

const Search: React.FC<{
	setListLessor: any;
	checkInDate: any;
	checkOutDate: any;
	setCheckInDate: any;
	setCheckOutDate: any;
}> = ({
	setListLessor,
	checkInDate,
	setCheckInDate,
	checkOutDate,
	setCheckOutDate,
}) => {
	const userMe = userGlobalCheck();
	let [searchParams, setSearchParams] = useSearchParams();
	const [searchInput, setSearchInput] = useState("");
	const [nightCount, setNightCount] = useState<string>("1");

	const handleChangeNightCount = (event: SelectChangeEvent) => {
		setNightCount(event.target.value as string);
		setCheckOutDate(
			moment(checkInDate).add(event.target.value, "days").format("LL")
		);
	};

	const handleChangeCheckInDate = (newValue: any) => {
		setCheckInDate(newValue);
		setCheckOutDate(
			moment(newValue).add(nightCount, "days").format("LL")
		);
	};

	const sendQuery = async () => {
		if (!searchInput) {
			setSearchParams("");
			return;
		}
		setSearchParams(`q=${searchInput}`);
		const data = await axiosMethod(`lessor?q=${searchInput}`, "get");
		if (data.success) {
			setListLessor(data.body);
		}
	};

	return (
		<>
			{userMe.user && userMe.user.type !== "PARTNER" && (
				<div className="mt-3 p-4 shadow">
					<div className="row w-75 m-auto">
						<TextField
							id="outlined-basic"
							label="Thành phố, địa điểm hoặc tên khách sạn"
							variant="outlined"
							value={searchInput}
							onChange={(e) =>
								setSearchInput(e.target.value)
							}
						/>
					</div>
					<div className="row mt-4 w-75 m-auto">
						<div className="col">
							<LocalizationProvider
								dateAdapter={AdapterMoment}
							>
								<DatePicker
									label="Nhận phòng"
									inputFormat="DD/MM/YYYY"
									value={checkInDate}
									onChange={handleChangeCheckInDate}
									renderInput={(params) => (
										<TextField {...params} />
									)}
								/>
							</LocalizationProvider>
						</div>
						<div className="col">
							<Box sx={{ minWidth: 120 }}>
								<FormControl fullWidth>
									<InputLabel id="demo-simple-select-label">
										Số đêm
									</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={nightCount}
										label="Age"
										onChange={
											handleChangeNightCount
										}
									>
										<MenuItem value={1}>
											1 đêm
										</MenuItem>
										<MenuItem value={2}>
											2 đêm
										</MenuItem>
										<MenuItem value={3}>
											3 đêm
										</MenuItem>
										<MenuItem value={4}>
											4 đêm
										</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</div>
						<div className="col">
							<label className="fw-bold">Trả phòng</label>
							<div>{checkOutDate}</div>
						</div>
						<div className="col">
							<button
								className="btn btn-primary p-3"
								onClick={sendQuery}
							>
								<BsSearch />
								Tìm khách sạn
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default globalStateAndAction(Search);
