import moment from "moment";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { formatPrice } from "../../../../utils/format.price";

const BillComponent: React.FC<any> = ({ userMe, bill }) => {
	return (
		<div className="col-md-12">
			<div className="row d-flex justify-content-center py-3 my-3">
				<div className="receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
					<div className="row p-3">
						<div className="col-xs-6 col-sm-6 col-md-6">
							<div className="receipt-left">
								<img
									className="img-fluid rounded-circle"
									style={{
										width: "80px",
										height: "80px",
									}}
									alt="iamgurdeeposahan"
									src="https://www.kindpng.com/picc/m/650-6505340_html5-icon-traveloka-hd-png-download.png"
								/>
							</div>
						</div>
						<div className="col-xs-6 col-sm-6 col-md-6 text-right">
							<div className="receipt-right">
								<h5>{userMe.user!.companyName}</h5>
								<p>
									{userMe.user!.phone}
									<i className="fa fa-phone"></i>
								</p>
								<p>
									{userMe.user!.email}
									<i className="fa fa-envelope-o"></i>
								</p>
								<p>
									{userMe.user!.address}
									<i className="fa fa-location-arrow"></i>
								</p>
							</div>
						</div>
					</div>

					<div className="row p-3">
						<div className="col-xs-6 col-sm-6 col-md-6 text-left">
							<div className="receipt-right">
								<h5>{bill.body.tenKH} </h5>
								<p>
									<b>Mobile :</b> {bill.body.sdt}
								</p>
								<p>
									<b>Email :</b> {bill.body.email}
								</p>
							</div>
						</div>
						<div className="col-xs-6 col-sm-6 col-md-6">
							<div className="receipt-left">
								<h3>INVOICE #{bill.body.id}</h3>
							</div>
						</div>
					</div>

					<div className="table-responsive">
						<table className="table table-bordered">
							<thead>
								<tr>
									<th>Lessor</th>
									<th>Apartment</th>
									<th>Quantity</th>
									<th>Status</th>
									<th>Amount</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div className="row">
											<div className="col-md-auto">
												<img
													src={
														bill.body
															.hinhAnhBcts
													}
													className="img-fluid rounded-circle"
													style={{
														width: "50px",
														height: "50px",
													}}
													alt=""
												/>
											</div>
											<div className="ms-2 col">
												{bill.body.tenBct}
											</div>
										</div>
									</td>
									<td>{bill.body.tenCanHo}</td>
									<td>{bill.body.soLuongCanHo}</td>
									<td>
										{bill.body.trangThai ? (
											<AiOutlineCheckCircle
												className="text-success"
												size={25}
											/>
										) : (
											<AiOutlineCloseCircle
												className="text-danger"
												size={25}
											/>
										)}
									</td>
									<td>
										{formatPrice(
											bill.body.tongTienCanHo
										)}
									</td>
								</tr>
								<tr>
									<td
										colSpan={4}
										className="text-end"
									>
										<div>Tax</div>
									</td>
									<td>
										<div>
											{formatPrice(
												bill.body.thue
											)}
										</div>
									</td>
								</tr>
								<tr>
									<td
										colSpan={4}
										className="text-end"
									>
										<div>Total</div>
									</td>
									<td>
										<div>
											{formatPrice(
												bill.body.tongTien
											)}
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="row">
						<div className="receipt-header receipt-header-mid receipt-footer">
							<div className="col-xs-8 col-sm-8 col-md-8 text-left">
								<div className="receipt-right">
									<p>
										<b>Date :</b>
										{moment(
											bill.body.ngayTao
										).format("ll")}
									</p>
									<h5
										style={{
											color: " rgb(140, 140, 140)",
										}}
									>
										Thanks you for choosen our
										service !
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BillComponent;
