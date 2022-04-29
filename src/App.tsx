import React, { useEffect, useState } from "react";
import "./assets/css/app.scss";
import AnimatedRoutes from "./components/AnimatedRoutes";
import logo from "./logo.svg";
const App: React.FC = () => {
	const [loading, setLoading] = useState<Boolean>(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<>
			{loading ? (
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo"></img>
						<p className="mt-5 text-info fs-1">
							<em>Traveloka</em>
						</p>
					</header>
				</div>
			) : (
				<AnimatedRoutes />
			)}
		</>
	);
};

export default App;
