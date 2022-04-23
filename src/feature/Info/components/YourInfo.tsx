import React from "react";
import { Card, Form, CardTitle, Input, CardText, Row, Col, FormGroup, Label } from "reactstrap";

const YourInfo: React.FC = () => {

    const guests = [
        {
            title: 'Tôi là khách lưu trú',
            id: 'flexRadioDefault1'
        },
        {
            title: 'Tôi đang đặt cho người khác',
            id: 'flexRadioDefault2'
        }
    ];

    return (<>
        <div className="your_info mb-4">
            <div className="mb-3 fw-bold">Thông tin của bạn</div>
            <Card className="shadow">
                <Form className="card-body pb-0 px-0">
                    <div className="mb-3 px-3">
                        <CardTitle tag="h6">Tên người liên hệ:</CardTitle>
                        <Input />
                        <CardText>
                            <small className="text-muted">
                                *Nhập tên như trên CMND/hộ chiếu (không dấu)
                            </small>
                        </CardText>
                    </div>
                    <Row className="px-3">
                        <Col xs="7" className="">
                            <FormGroup className="col">
                                <Label for="Select" className="fw-bold">
                                    Số di động
                                </Label>
                                <Row className="d-flex">
                                    <Col xs="5">
                                        <Input id="Select" name="select" type="select">
                                            <option>(VN)+84</option>
                                            <option>(US)+1</option>
                                            <option>(China)+86</option>
                                            <option>(ThaiLand)+66</option>
                                        </Input>
                                    </Col>
                                    <Col xs="7">
                                        <Input
                                            id="Select"
                                            name="email"
                                            placeholder=""
                                            type="text"
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                        <Col xs="5">
                            <FormGroup>
                                <Label for="exampleEmail" className="fw-bold">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="VD: email@example.com"
                                    type="email"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup
                        check
                        className="d-flex justify-content-around bg_check-date pt-3 pb-2 m-0"
                    >
                        {guests.map((guest) => {
                            return (
                                <div>
                                    <Input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id={guest.id}
                                    />
                                    <Label
                                        className="form-check-label"
                                        htmlFor={guest.id}
                                    >
                                        {guest.title}
                                    </Label>
                                </div>
                            );
                        })}
                    </FormGroup>
                </Form>
            </Card>
        </div>
    </>)
}
export default YourInfo;