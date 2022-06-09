import { useState } from "react";
import {
	Container,
	Form,
	FormFeedback,
	FormGroup,
	Input,
	Label,
} from "reactstrap";
import globalStateAndAction from "../../../container/global.state.action";
import axiosMethod from "../../../utils/api";
import { Toast } from "../../../utils/toast.sweet-alert";
import { userGlobalCheck } from "../../../utils/user.me";

const EditLessor: React.FC<any> = ({
	lessorEditID,
	listLessor,
	setListLessor,
	setEditLessorModal,
}) => {
	const userMe = userGlobalCheck();

	const thisLessor = listLessor.find(
		(lessor: any) => lessor.maBct === lessorEditID
	);

	const [inputs, setInputs] = useState<any>({
		tenBct: thisLessor.tenBct,
		diaChi: thisLessor.diaChi,
		moTa: thisLessor.moTa,
		maLuuTru: thisLessor.maLoaiLuuTru.maLoaiLuuTru,
	});

	const [errors, setErrors] = useState({
		tenBct: false,
		diaChi: false,
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

	const handleSubmitNewLessor = async (e: any) => {
		e.preventDefault();
		if (
			!inputs.tenBct ||
			!inputs.diaChi ||
			!inputs.moTa ||
			file.length < 2
		) {
			setErrors({
				...errors,
				tenBct: true,
				diaChi: true,
				moTa: true,
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

		formData.append("maPartner", userMe.user!.userId);

		const res = await axiosMethod(
			`lessor/${lessorEditID}`,
			"put",
			formData
		);

		setEditLessorModal();

		if (res.success) {
			Toast.fire({
				icon: "success",
				title: "Success",
			});
			const index = listLessor.indexOf(thisLessor);
			const newList = [...listLessor];
			newList[index] = res.body;
			setListLessor(newList);
			return;
		}
		Toast.fire({
			icon: "error",
			title: "Error",
		});
	};
	return (
		<Container className="my-5">
			<Form onSubmit={handleSubmitNewLessor} id="edit-lessor-form">
				<FormGroup>
					<Label for="tenBct">Tên bên cho thuê</Label>
					<Input
						onChange={handleInputChange}
						id="tenBct"
						name="tenBct"
						type="text"
						invalid={errors.tenBct}
						value={inputs.tenBct}
					/>
					<FormFeedback invalid>
						Bạn cần phải nhập tên bên cho thuê !
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="diaChi">Địa chỉ</Label>
					<Input
						onChange={handleInputChange}
						id="diaChi"
						name="diaChi"
						type="text"
						invalid={errors.diaChi}
						value={inputs.diaChi}
					/>
					<FormFeedback invalid>
						Bạn cần phải nhập địa chỉ bên cho thuê !
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="moTa">Mô tả</Label>
					<Input
						onChange={handleInputChange}
						id="moTa"
						name="moTa"
						type="text"
						invalid={errors.moTa}
						value={inputs.moTa}
					/>
					<FormFeedback invalid>
						Bạn cần phải nhập mô tả bên cho thuê !
					</FormFeedback>
				</FormGroup>
				<FormGroup>
					<Label for="hinhAnh">Hình ảnh</Label>
					<Input
						onChange={handleFileChanges}
						id="hinhAnh"
						type="file"
						invalid={errors.hinhAnh}
						multiple
					/>
					<FormFeedback invalid>
						Bạn cần ít nhất 2 hình ảnh bên cho thuê !
					</FormFeedback>
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
			</Form>
		</Container>
	);
};

export default globalStateAndAction(EditLessor);
