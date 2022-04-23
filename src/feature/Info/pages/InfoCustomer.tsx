import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../../../assets/css/info.scss';
import '../../../assets/css/card.scss';
import Preferential from "../components/Preferential"
import YourInfo from "../components/YourInfo"
import Requirement from "../components/Requirement"
import PolycyCancel from "../components/PolycyCancel"
import PriceDetails from "../components/PriceDetails"
import ConfirmButton from "../components/ConfirmButton"
import TitleInfo from "../components/TitleInfo"
import RoomInfo from "../components/RoomInfo"

const InfoCustomer: React.FC = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <TitleInfo />
                </Row>
                <Row>
                    <Col
                        className="form"
                        id="formpay"
                        sm={{
                            offset: 1,
                            size: 7
                        }}
                    >
                        <Preferential />
                        <YourInfo />
                        <Requirement />
                        <PolycyCancel />
                        <PriceDetails />
                        <ConfirmButton />

                    </Col>
                    <Col
                        sm={{
                            size: 3
                        }}
                    >
                        <RoomInfo />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default InfoCustomer;
