import React from "react";
import { Card, Form, CardText, Container, FormGroup, Input, Label } from "reactstrap";

const Requirement: React.FC = () => {

    const requirements: string[] = [
        'Phòng không hút thuốc',
        'Phòng liên thông',
        'Tầng lầu',
        'Loại giường',
        'Giờ nhận phòng',
        'Giờ trả phòng',
        'Khác'
    ];


    return (<>
        <div className="requirement mb-4">
            <div className="mb-3 fw-bold">Yêu cầu đặt biệt</div>
            <Card className="shadow">
                <Form className="card-body pt-0 px-0">
                    <CardText className="bg_check-date p-3">
                        <small>
                            Bạn có yêu cầu đặc biệt? Gửi yêu cầu và khách sạn sẽ cố
                            gắng đáp ứng nguyện vọng của bạn. (Xin lưu ý yêu cầu đặc
                            biệt không được bảo đảm trước và có thể thu phí)
                        </small>
                    </CardText>
                    <Container className="px-3 pt-2">
                        <Form className="px-3 row row-cols-2">
                            {requirements.map((requirement) => {
                                return (
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label check>{requirement}</Label>
                                    </FormGroup>
                                );
                            })}
                        </Form>
                    </Container>
                </Form>
            </Card>
        </div>
    </>)
}
export default Requirement;