import React from "react";
import { Col } from "reactstrap";

const TitleReview: React.FC = () => {
    return (<>
        <Col
            sm={{
                offset: 1,
                size: 7
            }}
        >
            <div className="title_info mb-5">
                <h4 className="mb-3 fw-bold">Bạn vui lòng kiểm tra lại đặt chỗ</h4>
                <h6 className="text-muted">
                    Vui lòng xem lại chi tiết đặt phòng của bạn trước khi tiếp tục đến bước thanh toán
                </h6>
            </div>
        </Col>
    </>)
}
export default TitleReview; 