import "../../../../assets/css/useradmin.css";
import { FaCcVisa } from "react-icons/fa";

const PaymentAdmin: React.FC = () => {
	return (
		<>
			<div className="card card-header-actions my-4">
				<div className="card-header">Payment Method</div>
				<div className="card-body px-0">
					<div className="d-flex align-items-center justify-content-between px-4">
						<div className="d-flex align-items-center">
							<FaCcVisa size={50} />
							<div className="ms-4">
								<div className="small">
									Visa ending in 4242
								</div>
								<div className="text-xs text-muted">
									Expires 04/2025
								</div>
							</div>
						</div>
						<div className="ms-4 small">
							<div className="badge bg-light text-dark me-3">
								Default
							</div>
						</div>
					</div>
					<a
						href="https://stripe.com/docs/testing"
						className="stretched-link"
					></a>
				</div>
			</div>
		</>
	);
};

export default PaymentAdmin;
