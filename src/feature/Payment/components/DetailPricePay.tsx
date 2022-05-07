import React from "react";
import { Col, Container, Row } from "reactstrap";

const DetailPricePay: React.FC = () => {
    return (
        <>
            <Container className="pe-5 pt-3 mt-3 mb-5 bg_check-date">
                <p className="fw-bold">Chi tiết giá</p>
                <Row className="mb-3">
                    <Col xs="9" className="pe-0">
                        <p className="m-0"><small>Queen central Apartment-Hotel,</small></p>
                        <small>Superior Queen Room with Window</small>
                        <small className="ps-2">x 1</small>
                    </Col>
                    <Col xs="3" className="p-0 d-flex justify-content-end ">
                        <small>374.780 VND</small>
                    </Col>
                </Row>
                <Row>
                    <Col xs="9" className="pe-0">
                        <small>Thuế và phí</small>
                        <small className="ps-2">x 1</small>
                    </Col>
                    <Col xs="3" className="p-0 d-flex justify-content-end ">
                        <small>50.220 VND</small>
                    </Col>
                </Row>
                <hr className="row mt-3 ms-0" />
                <Row>
                    <Col xs="9" className="pe-0">
                        <small>Tổng giá tiền</small>
                    </Col>
                    <Col xs="3" className="p-0 d-flex justify-content-end ">
                        <p>374.780 VND</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default DetailPricePay;