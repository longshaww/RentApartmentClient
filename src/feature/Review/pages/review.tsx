import React from "react";
import { Container, Row, Col } from "reactstrap";
import TitleReview from "../components/TitleReview"
// import PriceDetails from "../../Info/components/PriceDetails";
import PolicyBooking from "../components/PolicyBooking";
import DetailInfo from "../components/DetailInfo";
import RoomReview from "../components/RoomReview";
// import ConfirmButton from "../../Info/components/ConfirmButton";

const Review: React.FC = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <TitleReview />
                </Row>
                <Row>
                    <Col
                        className="form"
                        id="formpay"
                        sm={{
                            offset: 1,
                            size: 7,
                        }}
                    >
                        <RoomReview />
                        <PolicyBooking />
                        {/* <PriceDetails />
                        <ConfirmButton /> */}
                    </Col>
                    <Col
                        sm={{
                            size: 3,
                        }}
                    >
                        <DetailInfo />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Review;