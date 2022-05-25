import { useState } from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Container,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap";
import axiosMethod from "../../../utils/api";

const NewLessor: React.FC = () => {
	const [inputs, setInputs] = useState<any>({
		tenBct: "",
		diaChi: "",
		moTa: "",
		maLuuTru: "LLT1",
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
	// console.log(file);

	const handleSubmitNewLessor = async (e: any) => {
		e.preventDefault();
		// console.log(inputs);
		const formData = new FormData();
		for (let i = 0; i < file.length; i++) {
			formData.append("hinhAnhBcts", file[i]);
		}
		for (const key in inputs) {
			formData.append(key, inputs[key]);
		}
		// for (var value of Array.from(formData.values())) {
		// 	console.log(value);
		// }
		const data = await axiosMethod("lessor", "post", formData);
		console.log(data);
	};
	return (
		<Container className="my-5">
			<Breadcrumb>
				<BreadcrumbItem active>Tạo bên cho thuê</BreadcrumbItem>
				<BreadcrumbItem className="text-primary">
					Tạo căn phòng / villa
				</BreadcrumbItem>
				<BreadcrumbItem className="text-primary">
					Xác nhận với các điều khoản
				</BreadcrumbItem>
			</Breadcrumb>
			<Form onSubmit={handleSubmitNewLessor}>
				<h2>Tạo bên cho thuê mới</h2>
				<FormGroup>
					<Label for="tenBct">Tên bên cho thuê</Label>
					<Input
						onChange={handleInputChange}
						id="tenBct"
						name="tenBct"
						type="text"
						value={inputs.tenBct}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="diaChi">Địa chỉ</Label>
					<Input
						onChange={handleInputChange}
						id="diaChi"
						name="diaChi"
						type="text"
						value={inputs.diaChi}
					/>
				</FormGroup>
				{/* <FormGroup>
					<Label for="giaTrungBinh">Giá trung bình</Label>
					<Input
						onChange={handleInputChange}
						name="giaTrungBinh"
						type="text"
					/>
				</FormGroup> */}
				{/* <FormGroup>
					<Label for="soSao">Số sao</Label>
					<Input id="soSao" name="soSao" type="text" />
				</FormGroup> */}
				{/* <FormGroup>
					<Label for="luotDanhGia">Lượt đánh giá</Label>
					<Input
						id="luotDanhGia"
						name="luotDanhGia"
						type="text"
					/>
				</FormGroup> */}
				<FormGroup>
					<Label for="moTa">Mô tả</Label>
					<Input
						onChange={handleInputChange}
						id="moTa"
						name="moTa"
						type="text"
						value={inputs.moTa}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="hinhAnh">Hình ảnh</Label>
					<Input
						onChange={handleFileChanges}
						id="hinhAnh"
						type="file"
						multiple
					/>
				</FormGroup>
				<FormGroup>
					<Label for="maLuuTru">Loại hình lưu trú</Label>
					<Input
						onChange={handleInputChange}
						id="maLuuTru"
						name="maLuuTru"
						type="select"
						value={inputs.maLuuTru}
					>
						<option value="LLT1">Căn hộ</option>
						<option value="LLT2">Villa</option>
					</Input>
				</FormGroup>
				{/* <FormGroup>
					<Label for="diemTienNghi">Điểm tiện nghi</Label>
					<Input
						id="diemTienNghi"
						name="diemTienNghi"
						type="text"
					/>
				</FormGroup> */}
				<div className="d-flex justify-content-center">
					<Button color="primary">Tiep tuc</Button>
				</div>
			</Form>
		</Container>
	);
};

export default NewLessor;
