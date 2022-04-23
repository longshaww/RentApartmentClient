import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const Preferential: React.FC = () => {
    return (<>
        <Card className=" d-flex flex-row align-items-center shadow px-3 mb-4">
            <div className="flex-shrink-0">
                <img
                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6019da794c10a8a7b0357f9ed46f1d6f.png"
                    alt=""
                />
            </div>
            <CardBody className="flex-grow ms-3">
                <CardTitle tag="h6" className="fw-bold">
                    Đăng nhập hoặc Đăng ký và tận hưởng ưu đãi dành riêng cho
                    thành viên
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted d-flex flex-row mt-2">
                    <img
                        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/33fcc4e9daaeafc158c1a2542399ac66.svg"
                        alt=""
                    />
                    <CardText className="ps-2">
                        <small>
                            Đặt chỗ nhanh và dễ dàng hơn với Passenger Quick Pick
                        </small>
                    </CardText>
                </CardSubtitle>
                <CardText className="pt-2">
                    <Link to="/" className="text-decoration-none fw-bold">
                        Đăng nhập hoặc Đăng ký
                    </Link>
                </CardText>
            </CardBody>
        </Card>
    </>)
}
export default Preferential;