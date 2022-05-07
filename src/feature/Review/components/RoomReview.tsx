import React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

const RoomReview: React.FC = () => {
    return (
        <>
            <Card className="shadow mb-5">
                <CardBody>
                    <Row className="mt-2">
                        <div className="col-md-auto">
                            <img src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10037566-3c651cb4dc545945950de319383b474b.jpeg?_src=imagekit&tr=h-128,q-40,w-128" alt="" className="rounded" />
                        </div>
                        <div className="col-9 p-0">
                            <CardTitle className="d-flex fw-bold ms-3 mt-2" tag="h5">
                                <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4f35d2c4e9c6c6663f831cca1d2392b3.svg" alt="" className="me-3" />
                                <CardText>Queen central Apartment-Hotel </CardText>
                            </CardTitle>
                            <hr className="border border-2 mb-1" />
                            <ul className="row p-0 ms-3 mb-0">
                                <li className="col p-0">
                                    <CardText className="fw-bold text-muted">Ngày nhận phòng:</CardText>
                                    <CardText className="fw-bold">5 May 2022</CardText>
                                    <CardText>14:00 - 22:00</CardText>
                                </li>
                                <li className="col p-0">
                                    <CardText className="fw-bold text-muted">Ngày trả phòng:</CardText>
                                    <CardText className="fw-bold">6 May 2022</CardText>
                                    <CardText>07:00 - 12:00</CardText>
                                </li>
                                <li className="col p-0">
                                    <CardText className="fw-bold text-muted">Số đêm nghỉ</CardText>
                                    <CardText>1 đêm</CardText>
                                </li>
                            </ul>
                        </div>
                    </Row>
                    <CardText className="d-flex align-items-center border border-primary rounded p-3 bg-primary bg-opacity-10 mt-3">
                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fc5c0fe9467d347bab8b0f2f9194868b.svg" alt="" className="pe-3" />
                        <small className="fw-bold text-primary">Để được nhận phòng sớm hoặc muộn, vui lòng thoả thuận trực tiếp với nơi lưu trú.</small>
                    </CardText>
                    <hr className="border border-2" />
                    <Row>
                        <Col md={{
                            size: 6
                        }}>
                            <CardTitle className="fw-bold">Superior Queen Room with Window</CardTitle>
                            <div className="d-flex">
                                <CardText className="flex-fill  ">
                                    <small className="text-muted">
                                        khách/phòng
                                    </small>
                                </CardText>
                                <CardText className="flex-fill ps-1">
                                    <small>
                                        2 khách
                                    </small>
                                </CardText>
                            </div>
                            <div className="d-flex">
                                <CardText className="flex-fill pe-5 me-4">
                                    <small className="text-muted">
                                        Kiểu giường
                                    </small>
                                </CardText>
                                <CardText className="flex-fill ps-1">
                                    <small>
                                        1 giường cỡ queen
                                    </small>
                                </CardText>
                            </div>
                        </Col>
                        <Col md={{
                            size: 6
                        }}>
                            <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                    <img
                                        className="rounded-3"
                                        src=""
                                        style={{
                                            width: "7rem",
                                            height: "7rem",
                                        }}
                                        alt=""
                                    />
                                </div>
                                <div className="flex-grow-1 ms-4">
                                    <CardText>
                                        <img
                                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a5be12e728bdb331c596c7c181667dca.svg"
                                            alt=""
                                        />
                                        <small className="ms-1 text-muted">
                                            Không gồm bữa sáng
                                        </small>
                                    </CardText>
                                    <CardText>
                                        <img
                                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5a913a9638da9c963966d8a962306abd.svg"
                                            alt=""
                                        />
                                        <small className="ms-1 color_wifi">
                                            WiFi miễn phí
                                        </small>
                                    </CardText>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}
export default RoomReview;