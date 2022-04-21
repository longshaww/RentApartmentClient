import React from "react";
// import Icon from '../../../components/Icon';
import "../../../assets/css/app.scss";

const Search: React.FC = () => {
	return (
		<>
			<form className="form-inline d-flex mt-3" id="">
				<input
					className="form-control mr-sm-2"
					id="remove_shadow"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button className="btn" type="submit" id="remove_shadow">
					<p className="width_icon m-0">
						{/* <Icon name="IcSearch" /> */}
					</p>
				</button>
			</form>
		</>
	);
};
export default Search;
