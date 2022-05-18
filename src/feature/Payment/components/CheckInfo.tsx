import React from "react";
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";
import "../../../assets/css/payments.scss"

const CheckInfo: React.FC = () => {
    return (
        <>
            <Card className="room_info shadow">
                <CardBody className="p-0">
                    <div>
                        <CardTitle className="text-muted px-3 pt-3 fw-bold"><small>MÃ ĐẶT CHỖ</small></CardTitle>
                        <CardText className="px-3">808571128</CardText>
                    </div>
                    <hr className="" />
                    <div>
                        <CardTitle className="text-muted px-3 fw-bold"><small>KIỂM TRA THÔNG TIN ĐẶT PHÒNG</small></CardTitle>
                        <CardSubtitle className="px-3 fw-bold mb-3">Queen central Apartment-Hotel</CardSubtitle>
                        <CardText className="ms-1">
                            <ul>
                                <li className="list-check">thứ bảy, 7 tháng 5 năm 2022</li>
                                <li className="list-check">1 đêm</li>
                                <li className="list-check">Studio with Kitchen</li>
                                <li className="list-check">1 phòng</li>
                            </ul>
                        </CardText>
                    </div>
                    <hr />
                    <div>
                        <CardTitle className="text-muted px-3 fw-bold"><small>KHÁCH</small></CardTitle>
                        <CardText className="px-3 pb-3">long</CardText>
                    </div>

                </CardBody>
            </Card>
        </>
    )
}
export default CheckInfo;