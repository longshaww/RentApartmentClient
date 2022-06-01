import { useState } from "react";
import {
	Container,
	Form,
	FormFeedback,
	FormGroup,
	Input,
	Label,
} from "reactstrap";
import axiosMethod from "../../../utils/api";
import { Toast } from "../../../utils/toast.sweet-alert";

const EditApartment: React.FC<any> = ({
	idRoom,
	listApartment,
	setListApartment,
	editApartmentModal,
	setEditApartmentModal,
}) => {
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
					<Label for="tenCanHo">Tên căn hộ</Label>
					<Input
						id="tenCanHo"
						name="tenCanHo"
						type="text"
						invalid={errors.tenCanHo}
						onChange={handleInputChange}
						value={inputs.tenCanHo}
					/>
					<FormFeedback invalid>
						Bạn cần phải nhập tên căn hộ !
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="dienTich">Diện tích</Label>
					<Input
						id="dienTich"
						name="dienTich"
						type="text"
						onChange={handleInputChange}
						value={inputs.dienTich}
						invalid={errors.dienTich}
					/>
					<FormFeedback invalid>
						Bạn cần phải nhập diện tích căn hộ
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="gia">Giá</Label>
					<Input
						id="gia"
						name="gia"
						type="text"
						onChange={handleInputChange}
						value={inputs.gia}
						invalid={errors.gia}
					/>
					<FormFeedback invalid>
						Bạn cần phải nhập giá căn hộ !
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="soLuongKhach">Số lượng khách</Label>
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
					<Label for="hinhAnh">Hình ảnh</Label>
					<Input
						id="hinhAnh"
						onChange={handleFileChanges}
						multiple
						type="file"
						invalid={errors.hinhAnh}
					/>
					<FormFeedback invalid>
						Bạn cần phải thêm ít nhất 2 ảnh và tối đa 5 ảnh !
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="moTa">Mô tả</Label>
					<Input
						id="moTa"
						name="moTa"
						type="text"
						onChange={handleInputChange}
						value={inputs.moTa}
						invalid={errors.moTa}
					/>
					<FormFeedback invalid>
						Bạn cần phải nhập mô căn hộ !
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="soLuongCon">Số lượng còn</Label>
					<Input
						id="soLuongCon"
						name="soLuongCon"
						type="number"
						onChange={handleInputChange}
						value={inputs.soLuongCon}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="thongTinGiuong">Thông tin giường</Label>
					<Input
						id="thongTinGiuong"
						name="thongTinGiuong"
						type="select"
						onChange={handleInputChange}
						value={inputs.thongTinGiuong}
					>
						<option value="1 Giường Queen">
							1 Giường Queen
						</option>
						<option value="1 Giường King">
							1 Giường King
						</option>
						<option value="2 Giường Queen">
							2 Giường Queen
						</option>
					</Input>
				</FormGroup>
				<div className="d-flex justify-content-center"></div>
			</Form>
		</Container>
	);
};

export default EditApartment;
