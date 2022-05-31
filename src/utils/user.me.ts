import { User } from "../models/user.model";

export function userGlobalCheck() {
	const userMe: User = JSON.parse(localStorage.getItem("user_me") || "{}");
	if (!userMe.name) {
		return { isLogin: false };
	}
	return { isLogin: true, user: userMe };
}
