import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

const PriceDetails: React.FC = () => {
    return (<>
        <div className="price_details mb-5">
            <div className="mb-3 fw-bold">Chi tiết giá</div>
            <Card className="shadow">
                <CardTitle
                    tag="h6"
                    className="px-3 pt-3 fw-bold d-flex justify-content-between m-0"
                >
                    <CardText className="m-0">Thành tiền</CardText>
                    <CardText>595.000 VND</CardText>
                </CardTitle>
                <hr />
                <CardTitle className="p-3 d-flex justify-content-between m-0">
                    <CardText className="m-0">
                        (1x) Studio With Kitchen (1 đêm)
                    </CardText>
                    <CardText>524.691 VND</CardText>
                </CardTitle>
                <CardTitle className="p-3 d-flex justify-content-between m-0">
                    <CardText className="m-0">Thuế và phí</CardText>
                    <CardText>70.309 VND</CardText>
                </CardTitle>
            </Card>
        </div>
    </>)
}
export default PriceDetails;