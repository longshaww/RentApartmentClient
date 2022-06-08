import { Link } from "react-router-dom";
import "../assets/css/notfound.css";

const NotFound: React.FC = () => {
	return (
		<>
			<h1>Traveloka</h1>
			<p className="zoom-area">
				<b>Apartment</b> Endpoint not Found.{" "}
			</p>
			<section className="error-container">
				<span className="four">
					<span className="screen-reader-text">4</span>
				</span>
				<span className="zero">
					<span className="screen-reader-text">0</span>
				</span>
				<span className="four">
					<span className="screen-reader-text">4</span>
				</span>
			</section>
			<div className="link-container">
				<Link to="/" className="more-link">
					Back to home
				</Link>
			</div>
		</>
	);
};

export default NotFound;
