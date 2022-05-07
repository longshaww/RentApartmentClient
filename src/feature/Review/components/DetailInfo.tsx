import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const DetailInfo: React.FC = () => {
    return (
        <>
            <Card className="room_info shadow">
                <CardBody className="p-0">
                    <CardTitle tag="h6" className="fs-5 px-3 pt-3 fw-bold">
                        Chi tiết người liên lạc
                    </CardTitle>
                    <hr className="border border-2" />
                    <CardText className="px-3">
                        long long
                    </CardText>
                    <CardText className="px-3">
                        +84987654321
                    </CardText>
                    <CardText className="px-3 pb-3">
                        nguyenphilong029@gmail.com
                    </CardText>
                </CardBody>
            </Card>
            <Card className="room_info shadow mt-3">
                <CardBody className="p-0">
                    <CardTitle tag="h6" className="fs-5 px-3 pt-3 fw-bold">
                        Chi tiết khách ở
                    </CardTitle>
                    <hr className="border border-2" />
                    <CardText className="px-3">
                        <p className="mb-0">
                            <small className="text-muted">Tên khách</small>
                        </p>
                        long long
                    </CardText>
                    <CardText className="px-3">
                        <p className="mb-0">
                            <small className="text-muted">Yêu cầu đặc biệt</small>
                        </p>
                        -
                        <p className="text-size text-muted">
                            <small>Các yêu cầu đặc biệt sẽ tùy thuộc vào tính sẵn có và không được bảo đảm. Một số yêu cầu có thể phát sinh phụ phí.</small>
                        </p>
                    </CardText>

                </CardBody>
            </Card>
        </>
    );
};
export default DetailInfo;
