import moment from "moment";
import "../../../../assets/css/profile.css";
import { userGlobalCheck } from "../../../../utils/user.me";
const userMe = userGlobalCheck();
const ProfileComponent = () => {
	return (
		<>
			<div className="col-lg-12 mb-4 mb-sm-5">
				<div className="card card-style1 border-0 shadow">
					<div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-4 mb-lg-0">
								<img
									src="https://bootdey.com/img/Content/avatar/avatar7.png"
									alt="..."
								/>
							</div>
							<div className="col-lg-6 px-xl-10">
								<div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
									<h3 className="h2 text-white mb-0">
										{userMe.user!.name}
									</h3>
									<span className="text-white">
										{userMe.user!.type ===
											"PARTNER" &&
											userMe.user!.services[0]
												.serviceName}
									</span>
								</div>
								<ul className="list-unstyled mb-1-9">
									<li className="mb-2 mb-xl-3 display-28">
										<span className="display-26 text-secondary me-2 font-weight-600">
											Type:
										</span>
										{userMe.user!.type}
									</li>
									<li className="mb-2 mb-xl-3 display-28">
										<span className="display-26 text-secondary me-2 font-weight-600">
											Company name:
										</span>
										{userMe.user!.companyName}
									</li>
									<li className="mb-2 mb-xl-3 display-28">
										<span className="display-26 text-secondary me-2 font-weight-600">
											Address:
										</span>
										{userMe.user!.address}
									</li>
									<li className="mb-2 mb-xl-3 display-28">
										<span className="display-26 text-secondary me-2 font-weight-600">
											Email:
										</span>
										{userMe.user!.email}
									</li>
									<li className="mb-2 mb-xl-3 display-28">
										<span className="display-26 text-secondary me-2 font-weight-600">
											Phone:
										</span>
										{userMe.user!.phone}
									</li>
									<li className="mb-2 mb-xl-3 display-28">
										<span className="display-26 text-secondary me-2 font-weight-600">
											Gender:
										</span>
										{userMe.user!.gender
											? "Nam"
											: "Nữ"}
									</li>
									<li className="mb-2 mb-xl-3 display-28">
										<span className="display-26 text-secondary me-2 font-weight-600">
											Reward:
										</span>
										{userMe.user!.reward}
									</li>
									<li className="display-28">
										<span className="display-26 text-secondary me-2 font-weight-600">
											Date of birth:
										</span>
										{moment(
											userMe.user!.dob
										).format("ll")}
									</li>
								</ul>
								<ul className="social-icon-style1 list-unstyled mb-0 ps-0">
									<li>
										<a href="#!">
											<i className="ti-twitter-alt"></i>
										</a>
									</li>
									<li>
										<a href="#!">
											<i className="ti-facebook"></i>
										</a>
									</li>
									<li>
										<a href="#!">
											<i className="ti-pinterest"></i>
										</a>
									</li>
									<li>
										<a href="#!">
											<i className="ti-instagram"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileComponent;
