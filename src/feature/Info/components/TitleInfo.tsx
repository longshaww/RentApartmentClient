import React from "react";
import { Col } from "reactstrap";

const TitleInfo: React.FC = () => {
    return (<>
        <Col
            sm={{
                offset: 1,
                size: 7
            }}
        >
            <div className="title_info mb-4">
                <h4 className="mb-3 fw-bold">Đặt phòng khách sạn</h4>
                <h6 className="text-muted">
                    Điền thông tin người liên lạc và khách bên dưới
                </h6>
            </div>
        </Col>
    </>)
}
export default TitleInfo; 