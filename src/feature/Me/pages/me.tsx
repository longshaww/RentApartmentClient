import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import globalStateAndAction from "../../../container/global.state.action";

const UserMe: React.FC<any> = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const navigate = useNavigate();
	const tokenParam = searchParams.get("token");
	if (tokenParam !== null) {
		localStorage.setItem("access_token", tokenParam || "");
	}

	const accessToken = localStorage.getItem("access_token");

	const requestMe = async () => {
		const res = await axios({
			url: `${process.env.REACT_APP_PROFILE_BE}api/users/me`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		localStorage.setItem("user_me", JSON.stringify(res.data.data));
		navigate("/");
	};

	useEffect(() => {
		requestMe();
	}, []);
	return <h2>me</h2>;
};

export default globalStateAndAction(UserMe);
