import { Link } from "react-router-dom";
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
// {
//   "tenBct": "string",
//   "diaChi": "string",
//   "giaTrungBinh": 0,
//   "soSao": 0,
//   "luotDanhGia": 0,
//   "moTa": "string",
//   "hinhAnh": [
//     "string"
//   ],
//   "maLuuTru": "string",
//   "diemTienNghi": 0
// }
const NewLessor: React.FC = () => {
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
			<Form>
				<h2>Tạo bên cho thuê mới</h2>
				<FormGroup>
					<Label for="tenBct">Tên bên cho thuê</Label>
					<Input id="tenBct" name="tenBct" type="text" />
				</FormGroup>
				<FormGroup>
					<Label for="diaChi">Địa chỉ</Label>
					<Input id="diaChi" name="diaChi" type="text" />
				</FormGroup>
				<FormGroup>
					<Label for="giaTrungBinh">Giá trung bình</Label>
					<Input
						id="giaTrungBinh"
						name="giaTrungBinh"
						type="text"
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
					<Label for="moTa">Mô tả</Label>
					<Input id="moTa" name="moTa" type="text" />
				</FormGroup>
				<FormGroup>
					<Label for="hinhAnh">Hình ảnh</Label>
					<Input id="hinhAnh" name="hinhAnh" type="file" />
				</FormGroup>
				<FormGroup>
					<Label for="maLuuTru">Loại hình lưu trú</Label>
					<Input id="maLuuTru" name="maLuuTru" type="select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
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
					<Link
						to="/newLessor/newApartment"
						className="px-4 py-2 btn btn-primary"
						type="submit"
					>
						Tiếp tục
					</Link>
				</div>
			</Form>
		</Container>
	);
};

export default NewLessor;
