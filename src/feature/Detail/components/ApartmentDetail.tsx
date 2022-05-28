import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Modal, ModalBody } from "reactstrap";
import { checkImageString } from "../../../utils/check.image";

const ApartmentDetail: React.FC<any> = ({
	detailApartmentModal,
	setDetailApartmentModal,
	apartment,
	imgSlider,
	setImgSlider,
}) => {
	const leftArrowClick = () => {
		setImgSlider((prevState: any) =>
			prevState > 1
				? prevState - 1
				: apartment.hinhAnhCanHos.length - 1
		);
	};
	const rightArrowClick = () => {
		setImgSlider((prevState: any) =>
			prevState < apartment.hinhAnhCanHos.length - 1
				? prevState + 1
				: 0
		);
	};

	const toggle = () => {
		setDetailApartmentModal(!detailApartmentModal);
	};

	return (
		<Modal
			size="xl"
			isOpen={detailApartmentModal}
			toggle={toggle}
			centered={true}
		>
			<ModalBody className="p-0">
				{apartment && (
					<div className="row">
						<div className="col bg-dark">
							<div className="row">
								<div className="img d-flex justify-content-center p-4">
									<div
										className="text-light fs-1 my-auto me-4"
										style={{
											cursor: "pointer",
										}}
									>
										<AiOutlineArrowLeft
											onClick={leftArrowClick}
										/>
									</div>
									<img
										src={
											apartment.hinhAnhCanHos &&
											apartment.hinhAnhCanHos[
												imgSlider
											]
												? checkImageString(
														apartment
															.hinhAnhCanHos[
															imgSlider
														]
															.urlImageCanHo
												  )
												: "https://via.placeholder.com/350x250"
										}
										style={{
											width: "80%",
										}}
										className="rounded-3"
										alt=""
									></img>
									<div
										className="text-light fs-1 my-auto ms-4"
										style={{
											cursor: "pointer",
										}}
									>
										<AiOutlineArrowRight
											onClick={rightArrowClick}
										/>
									</div>
								</div>
							</div>
							<div className="row d-flex flex-wrap justify-content-start ms-2 my-3">
								{apartment.hinhAnhCanHos &&
									apartment.hinhAnhCanHos.map(
										(
											item: any,
											index: number
										) => {
											return (
												<>
													<img
														key={
															index
														}
														src={checkImageString(
															item.urlImageCanHo
														)}
														alt=""
														onClick={() =>
															setImgSlider(
																index
															)
														}
														className="img-slider-radius"
														style={{
															width: "11rem",
															height: "7rem",
														}}
													></img>
												</>
											);
										}
									)}
							</div>
						</div>
						<div className="col-3 h-100">
							<div className="room-information py-3 border-bottom">
								<div className="fw-bold">
									Thông tin phòng
								</div>
								<ul>
									<li>{apartment.dienTich}</li>
									<li>
										{apartment.soLuongKhach} khách
									</li>
								</ul>
							</div>

							<div className="room-covenient py-3 border-bottom">
								<div className="fw-bold">
									Tiện nghi phòng
								</div>
								<ul>
									{apartment.tienNghiCanHo &&
										apartment.tienNghiCanHo.map(
											(
												item: any,
												index: number
											) => {
												return (
													<li
														key={
															index
														}
													>
														{
															item.TenTienNghiCanHo
														}
													</li>
												);
											}
										)}
								</ul>
							</div>
							<div className="price-modal p-3 mt-3 shadow-lg ">
								<small>Khởi điểm từ:</small>
								<div className="d-flex">
									<div className="fw-bold text-danger fs-5">
										{apartment.gia},000 VNĐ
									</div>
									<small className="mt-1">
										/phòng/đêm
									</small>
								</div>
								<button className="btn btn-primary mt-2">
									Thêm lựa chọn phòng
								</button>
							</div>
						</div>
					</div>
				)}
			</ModalBody>
		</Modal>
	);
};

export default ApartmentDetail;
