import { BsSearch } from "react-icons/bs";
import "../../../assets/css/app.scss";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/lab";
import moment from "moment";

import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
	Box,
} from "@mui/material";

const Search: React.FC = () => {
	const [address, setAddress] = React.useState("");
	const [checkInDate, setCheckInDate] = React.useState<Date | null>(null);
	const [nightCount, setNightCount] = React.useState("");

	// moment(checkInDate).format("DD/MM/YYYY");
	const handleChange = (event: SelectChangeEvent) => {
		setNightCount(event.target.value as string);
	};

	return (
		<>
			<div className="mt-3 p-4 shadow">
				<div className="row w-75 m-auto">
					<TextField
						id="outlined-basic"
						label="Thành phố, địa điểm hoặc tên khách sạn"
						variant="outlined"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<div className="row mt-4 w-75 m-auto">
					<div className="col">
						<LocalizationProvider dateAdapter={AdapterMoment}>
							<DatePicker
								label="Nhận phòng"
								inputFormat="DD/MM/YYYY"
								value={checkInDate}
								onChange={(newValue) => {
									setCheckInDate(newValue);
								}}
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
									onChange={handleChange}
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
						<div>Thứ 3, 26 thg 4 2022</div>
					</div>
					<div className="col">
						<button className="btn btn-primary p-3">
							<BsSearch />
							Tìm khách sạn
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default Search;
