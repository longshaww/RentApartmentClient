import { Link } from "react-router-dom";
import {
	Breadcrumb,
	BreadcrumbItem,
	Container,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap";

const NewApartment: React.FC = () => {
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
			<Form>
				<h2>Tạo căn hộ mới</h2>
				<FormGroup>
					<Label for="tenCanHo">Tên căn hộ</Label>
					<Input id="tenCanHo" name="tenCanHo" type="text" />
				</FormGroup>
				<FormGroup>
					<Label for="dienTich">Diện tích</Label>
					<Input id="dienTich" name="dienTich" type="text" />
				</FormGroup>
				<FormGroup>
					<Label for="gia">Giá</Label>
					<Input id="gia" name="gia" type="text" />
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
						type="text"
					/>
				</FormGroup>
				<FormGroup>
					<Label for="hinhAnh">Hình ảnh</Label>
					<Input id="hinhAnh" name="hinhAnh" type="file" />
				</FormGroup>
				<FormGroup>
					<Label for="moTa">Mô tả</Label>
					<Input id="moTa" name="moTa" type="text" />
				</FormGroup>
				<FormGroup>
					<Label for="thongTinGiuong">Thông tin giường</Label>
					<Input
						id="thongTinGiuong"
						name="thongTinGiuong"
						type="select"
					>
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

export default NewApartment;
