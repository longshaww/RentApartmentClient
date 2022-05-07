import React from "react";
import { Card, CardTitle, CardSubtitle, CardText } from "reactstrap";


const PolycyCancel: React.FC = () => {
    return (
        <>
            <div className="polycy_cancel mb-5">
                <h5 className="mb-3 fw-bold">Chính sách huỷ đặt phòng</h5>
                <Card className="shadow">
                    <CardTitle
                        tag="h6"
                        className="px-3 pt-3 fw-bold"
                    >
                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a86e198be3ac14c3473b95d74c63993c.svg" alt="" className="me-2
                        " />
                        Chính sách hủy đặt phòng
                    </CardTitle>
                    <hr className="border border-2" />
                    <CardSubtitle className="text-success fw-bold px-3 pb-3">
                        Huỷ phòng có thu phí
                    </CardSubtitle>
                    <CardText className="text-muted px-3 pb-3 bg_check-date pt-2">
                        <small>Đặt phòng này không được hoàn tiền.
                            Thời gian hiển thị là giờ địa phương. Số đêm nghỉ và hạng phòng không được thay đổi.
                        </small>
                    </CardText>
                </Card>
            </div>
        </>
    );
};
export default PolycyCancel;
