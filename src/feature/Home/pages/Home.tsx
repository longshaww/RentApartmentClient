import React from "react";
import Filter from "../components/Filter";
import Slider from "../components/Slider";
import Search from "../components/Search";
import CardHome from "../components/CardHome";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	const accessToken = localStorage.getItem("access_token");
	const userMe = JSON.parse(localStorage.getItem("user_me") || "{}");
	if (!accessToken) {
		window.location.href = `${process.env.REACT_APP_LOGIN_URL}http://${window.location.host}/me`;
	}

	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<Container>
				<Slider />
				<Search />
			</Container>
			<Container>
				<Row>
					<div className="col-md-3 mt-3">
						<Filter />
					</div>
					<div className="col-md-9 mt-3">
						{userMe.type === "ADMIN" && (
							<>
								<Link
									to="/newLessor"
									className="text-decoration-none"
								>
									Đăng kí căn hộ / villa mới
								</Link>
								<Link
									to="/chart"
									className="text-decoration-none ms-5"
								>
									Xem thống kê / doanh thu
								</Link>
							</>
						)}
						<CardHome />
					</div>
				</Row>
			</Container>
		</motion.div>
	);
};
export default Home;
