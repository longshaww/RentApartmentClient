import React from "react";
import { FormGroup, Label, Input, Row, Col } from "reactstrap";

const FormCard: React.FC = () => {
    return (
        <>
            <FormGroup>
                <Label for="exampleCity">
                    Số thẻ tín dụng
                </Label>
                <Input
                    id="exampleCity"
                    name="city"
                    placeholder="16 chữ số mặt trên mặt thẻ"
                />
            </FormGroup>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleCity">
                            Hiệu lực đến
                        </Label>
                        <Input
                            id="exampleCity"
                            name="city"
                            placeholder="MM/YY"
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleState">
                            CVV
                        </Label>
                        <Input
                            id="exampleState"
                            name="state"
                            placeholder="3 số CVV"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="exampleCity">
                    Tên trên thẻ
                </Label>
                <Input
                    id="exampleCity"
                    name="city"
                    placeholder="Tên trên thẻ"
                />
            </FormGroup>
        </>
    )
}
export default FormCard;