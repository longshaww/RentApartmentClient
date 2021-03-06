import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
	Container,
	Form,
	FormFeedback,
	FormGroup,
	Input,
	Label,
} from "reactstrap";
import { setDetailLessor } from "../../../actions/detail.lessor";
import axiosMethod from "../../../utils/api";
import { Toast } from "../../../utils/toast.sweet-alert";

const EditApartment: React.FC<any> = ({
	idRoom,
	listApartment,
	setListApartment,
	editApartmentModal,
	setEditApartmentModal,
}) => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const thisApartment = listApartment.find((a: any) => a.maCanHo === idRoom);
	const [inputs, setInputs] = useState<any>({
		tenCanHo: thisApartment.tenCanHo,
		dienTich: thisApartment.dienTich,
		gia: thisApartment.gia,
		soLuongKhach: thisApartment.soLuongKhach,
		moTa: thisApartment.moTa,
		soLuongCon: thisApartment.soLuongCon,
		thongTinGiuong: thisApartment.thongTinGiuong,
	});

	const [errors, setErrors] = useState({
		tenCanHo: false,
		dienTich: false,
		gia: false,
		moTa: false,
		hinhAnh: false,
	});
	const [file, setFile] = useState<any>([]);
	const handleFileChanges = (e: any) => {
		setFile(e.target.files);
	};

	const handleInputChange = (event: any) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values: any) => ({ ...values, [name]: value }));
	};

	const handleNewApartmentSubmit = async (e: any) => {
		e.preventDefault();
		if (
			!inputs.tenCanHo ||
			!inputs.dienTich ||
			!inputs.gia ||
			isNaN(inputs.gia) ||
			!inputs.moTa ||
			!inputs.soLuongCon ||
			file.length < 2 ||
			file.length > 5
		) {
			setErrors({
				...errors,
				tenCanHo: true,
				dienTich: true,
				moTa: true,
				gia: true,
				hinhAnh: true,
			});
			return;
		}
		const formData = new FormData();
		for (let i = 0; i < file.length; i++) {
			formData.append("hinhAnhBcts", file[i]);
		}
		for (const key in inputs) {
			formData.append(key, inputs[key]);
		}
		formData.append("maBct", idRoom);

		const data = await axiosMethod(
			`apartment/${idRoom}`,
			"put",
			formData
		);
		setEditApartmentModal(!editApartmentModal);

		if (data.success) {
			const updateLessorPrice = await axiosMethod(
				`lessor/average/${id}`,
				"put"
			);
			if (updateLessorPrice.success) {
				dispatch(setDetailLessor(updateLessorPrice.body));
				Toast.fire({ icon: "success", title: "Updated" });
			}
			Toast.fire({
				icon: "success",
				title: "Success",
			});
			const index = listApartment.indexOf(thisApartment);
			const newList = [...listApartment];
			newList[index] = data.body;
			setListApartment(newList);
			return;
		}
		Toast.fire({
			icon: "error",
			title: "Error",
		});
	};
	return (
		<Container>
			<Form
				onSubmit={handleNewApartmentSubmit}
				id="new-apartment-form"
			>
				<FormGroup>
					<Label for="tenCanHo">T??n c??n h???</Label>
					<Input
						id="tenCanHo"
						name="tenCanHo"
						type="text"
						invalid={errors.tenCanHo}
						onChange={handleInputChange}
						value={inputs.tenCanHo}
					/>
					<FormFeedback invalid>
						B???n c???n ph???i nh???p t??n c??n h??? !
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="dienTich">Di???n t??ch</Label>
					<Input
						id="dienTich"
						name="dienTich"
						type="text"
						onChange={handleInputChange}
						value={inputs.dienTich}
						invalid={errors.dienTich}
					/>
					<FormFeedback invalid>
						B???n c???n ph???i nh???p di???n t??ch c??n h???
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="gia">Gi??</Label>
					<Input
						id="gia"
						name="gia"
						type="text"
						onChange={handleInputChange}
						value={inputs.gia}
						invalid={errors.gia}
					/>
					<FormFeedback invalid>
						B???n c???n ph???i nh???p gi?? c??n h??? !
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="soLuongKhach">S??? l?????ng kh??ch</Label>
					<Input
						id="soLuongKhach"
						name="soLuongKhach"
						type="select"
						onChange={handleInputChange}
						value={inputs.soLuongKhach}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="hinhAnh">H??nh ???nh</Label>
					<Input
						id="hinhAnh"
						onChange={handleFileChanges}
						multiple
						type="file"
						invalid={errors.hinhAnh}
					/>
					<FormFeedback invalid>
						B???n c???n ph???i th??m ??t nh???t 2 ???nh v?? t???i ??a 5 ???nh !
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="moTa">M?? t???</Label>
					<Input
						id="moTa"
						name="moTa"
						type="text"
						onChange={handleInputChange}
						value={inputs.moTa}
						invalid={errors.moTa}
					/>
					<FormFeedback invalid>
						B???n c???n ph???i nh???p m?? c??n h??? !
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="soLuongCon">S??? l?????ng c??n</Label>
					<Input
						id="soLuongCon"
						name="soLuongCon"
						type="number"
						onChange={handleInputChange}
						value={inputs.soLuongCon}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="thongTinGiuong">Th??ng tin gi?????ng</Label>
					<Input
						id="thongTinGiuong"
						name="thongTinGiuong"
						type="select"
						onChange={handleInputChange}
						value={inputs.thongTinGiuong}
					>
						<option value="1 Gi?????ng Queen">
							1 Gi?????ng Queen
						</option>
						<option value="1 Gi?????ng King">
							1 Gi?????ng King
						</option>
						<option value="2 Gi?????ng Queen">
							2 Gi?????ng Queen
						</option>
					</Input>
				</FormGroup>
				<div className="d-flex justify-content-center"></div>
			</Form>
		</Container>
	);
};

export default EditApartment;
