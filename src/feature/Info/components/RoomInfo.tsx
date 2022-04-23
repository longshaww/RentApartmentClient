import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const RoomInfo: React.FC = () => {
    return (<>
        <Card className="room_info shadow">
            <CardBody className="d-flex align-items-center">
                <div className="flex-shrink-0">
                    <img
                        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4f35d2c4e9c6c6663f831cca1d2392b3.svg"
                        alt=""
                    />
                </div>
                <div className="flex-grow ms-3">
                    <CardTitle tag="h6" className="fs-5">
                        Queen central Apartment-Hotel
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted">
                        <small>Queen central Apartment-Hotel </small>
                    </CardSubtitle>
                </div>
            </CardBody>
            <CardBody className="bg_check-date">
                <CardText className="d-flex">
                    <div className="flex-fill">
                        <small className="text-muted ">Ngày nhận phòng:</small>
                    </div>
                    <div className="d-flex flex-column fw-bold flex-fill">
                        <small>Sun, 24 Apr 2022</small>
                        <small>14:00 - 22:00</small>
                    </div>
                </CardText>
                <CardText className="d-flex">
                    <div className="flex-fill margin-text">
                        <small className="text-muted">Ngày trả phòng:</small>
                    </div>
                    <div className="d-flex flex-column fw-bold flex-fill">
                        <small>Sun, 24 Apr 2022</small>
                        <small>14:00 - 22:00</small>
                    </div>
                </CardText>
            </CardBody>
            <CardBody>
                <CardTitle tag="h6">(1x) Studio With Kitchen</CardTitle>
                <div className="d-flex">
                    <CardText className="flex-fill">
                        <small className="text-muted">khách/phòng</small>
                    </CardText>
                    <CardText className="flex-fill">
                        <small>2 khách</small>
                    </CardText>
                </div>
                <div className="d-flex mb-2">
                    <CardText className="flex-fill pe-5 me-4">
                        <small className="text-muted">Kiểu giường</small>
                    </CardText>
                    <CardText className="flex-fill ps-1">
                        <small>1 giường cỡ queen</small>
                    </CardText>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <div className="flex-shrink-0">
                        <img
                            className="rounded-3"
                            src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10037566-89fd180e29bcb224ebbb19d742f26b53.jpeg?_src=imagekit&tr=h-80,q-40,w-80"
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
                            <small className="ms-1 color_wifi">WiFi miễn phí</small>
                        </CardText>
                    </div>
                </div>
                <hr />
                <CardText>
                    <img
                        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b7f44a75a61d79df6226747661f37ca0.svg"
                        alt=""
                    />
                    <small className="text-muted ms-1">Không hoàn tiền</small>
                </CardText>
                <CardText>
                    <img
                        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7c8eec6b07ea44150dcaf8802cf712f2.svg"
                        alt=""
                    />
                    <small className="text-muted ms-1">
                        Không áp dụng đổi lịch
                    </small>
                </CardText>
            </CardBody>
        </Card>
    </>)
}
export default RoomInfo;
