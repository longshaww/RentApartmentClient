import React from "react";
import { Card, CardTitle, CardSubtitle } from "reactstrap";

const PolycyCancel: React.FC = () => {
	return (
		<>
			<div className="polycy_cancel mb-4">
				<div className="mb-3 fw-bold">Chính sách huỷ đặt phòng</div>
				<Card className="shadow">
					<CardTitle
						tag="h6"
						className="px-3 pt-3 fw-bold text-success"
					>
						Chính sách hủy đặt phòng
					</CardTitle>
					<hr className="border border-2" />
					<CardSubtitle className="text-muted px-3 pb-3">
						Đặt phòng này không được hoàn tiền.
					</CardSubtitle>
				</Card>
			</div>
		</>
	);
};
export default PolycyCancel;
