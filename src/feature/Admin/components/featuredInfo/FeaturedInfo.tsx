import { formatPrice } from "../../../../utils/format.price";
import "./featuredInfo.css";
// import { ArrowDownward } from "@material-ui/icons";

const FeaturedInfo: React.FC<{ total: any }> = ({ total }) => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<span className="featuredTitle">Revanue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">
						{total && formatPrice(total)}
					</span>
					{/* <span className="featuredMoneyRate">
						-11.4{" "}
						<ArrowDownward className="featuredIcon negative" />
					</span> */}
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
