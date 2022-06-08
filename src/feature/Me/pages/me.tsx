import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import globalStateAndAction from "../../../container/global.state.action";

const UserMe: React.FC<any> = () => {
	const [searchParams] = useSearchParams();
	const MySwal = withReactContent(Swal);

	const tokenParam = searchParams.get("token");
	if (tokenParam !== null) {
		localStorage.setItem("access_token", tokenParam || "");
	}

	const accessToken = localStorage.getItem("access_token");

	const requestMe = async () => {
		const res: any = await axios({
			url: `${process.env.REACT_APP_PROFILE_BE}api/users/me`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		if (res.status === 200) {
			localStorage.setItem("user_me", JSON.stringify(res.data.data));
			await MySwal.fire({
				title: "Đăng nhập thành công",
				icon: "success",
				didOpen: () => {
					MySwal.showLoading();
				},
				timer: 1000,
			});
			window.location.href = "/";
		}
	};

	useEffect(() => {
		requestMe();
	}, []);
	return <></>;
};

export default globalStateAndAction(UserMe);
