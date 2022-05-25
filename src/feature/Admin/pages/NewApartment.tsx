import { useState } from "react";
import { Link, useParams } from "react-router-dom";
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

const NewApartment: React.FC = () => {
	const params = useParams();
	const { id }: any = params;
	const [inputs, setInputs] = useState<any>({
		tenCanHo: "",
		dienTich: "",
		gia: "",
		soLuongKhach: "1",
		moTa: "",
		thongTinGiuong: "1 Giường Queen",
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
		const formData = new FormData();
		for (let i = 0; i < file.length; i++) {
			formData.append("hinhAnhBcts", file[i]);
		}
		for (const key in inputs) {
			formData.append(key, inputs[key]);
		}
		formData.append("maBct", id);
		// for (var value of Array.from(formData.values())) {
		// 	console.log(value);
		// }
		const data = await axiosMethod("apartment", "post", formData);
		console.log(data);
	};
	return (
		<Container>
			<Breadcrumb>
				<BreadcrumbItem className="text-primary">
					Tạo bên cho thuê
				</BreadcrumbItem>
				<BreadcrumbItem active>
					Tạo căn phòng / villa
				</BreadcrumbItem>
				<BreadcrumbItem className="text-primary">
					Xác nhận với các điều khoản
				</BreadcrumbItem>
			</Breadcrumb>
			<Form onSubmit={handleNewApartmentSubmit}>
				<FormGroup>
					<Label for="tenCanHo">Tên căn hộ</Label>
					<Input
						id="tenCanHo"
						name="tenCanHo"
						type="text"
						onChange={handleInputChange}
						value={inputs.tenCanHo}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="dienTich">Diện tích</Label>
					<Input
						id="dienTich"
						name="dienTich"
						type="text"
						onChange={handleInputChange}
						value={inputs.dienTich}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="gia">Giá</Label>
					<Input
						id="gia"
						name="gia"
						type="text"
						onChange={handleInputChange}
						value={inputs.gia}
					/>
				</FormGroup>
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
					/>
				</FormGroup>
				<FormGroup>
					<Label for="moTa">Mô tả</Label>
					<Input
						id="moTa"
						name="moTa"
						type="text"
						onChange={handleInputChange}
						value={inputs.moTa}
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
				{/* <FormGroup>
					<Label for="diemTienNghi">Điểm tiện nghi</Label>
					<Input
						id="diemTienNghi"
						name="diemTienNghi"
						type="text"
					/>
				</FormGroup> */}
				<div className="d-flex justify-content-center">
					<Button
						className="px-4 py-2 btn btn-primary"
						type="submit"
					>
						Tiếp tục
					</Button>
				</div>
			</Form>
		</Container>
	);
};

export default NewApartment;
