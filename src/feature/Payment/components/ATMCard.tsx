import React from "react";
import { Row, Col, CardBody, CardLink, Card } from "reactstrap";
import InstallmentVoucher from "../components/InstallmentVoucher";
import DetailPricePay from "../components/DetailPricePay";
import ConfirmButtonPay from "../components/ConfirmButtonPay";

const ATMCard: React.FC = () => {
    return (
        <>
            <Row>
                <Col xs="4">
                    <p className="fw-bold size-title-card">Thẻ ATM nội địa</p>
                </Col>
                <Col xs="8">
                    <ul className='d-flex p-0 justify-content-end'>
                        <li className="pe-3">
                            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/03/20/1489981839102-323bf608171cfdf6e5ab2b6c9f1ecb78.png?tr=q-75" alt="" width="48" height="24" />
                        </li>
                    </ul>
                </Col>
            </Row>
            <div>
                <p>Lưu ý trước khi thanh toán</p>
                <Card>
                    <CardBody>
                        <ul className="m-0 text-muted">
                            <li className="list-check">
                                <small>Thẻ thanh toán phải do ngân hàng nội địa phát hành và đã được kích hoạt chức năng thanh toán trực tuyến</small>
                            </li>
                            <li className="list-check">
                                <small>
                                    Vui lòng xem hướng dẫn chi tiết
                                    <a href="https://www.traveloka.com/vi-vn/explore/tips/huong-dan-thanh-toan-qua-atm/57838" className="ms-1">tại đây</a>
                                </small>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
            <hr />
            <InstallmentVoucher />
            <DetailPricePay />
            <ConfirmButtonPay />
        </>
    )
}
export default ATMCard;