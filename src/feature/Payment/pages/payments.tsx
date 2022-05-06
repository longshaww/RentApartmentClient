import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import CheckInfo from "../components/CheckInfo";
import PaymentCard from "../components/PaymentCard";
import ATMCard from "../components/ATMCard";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Payments() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (

        <>
            <Container className="mt-5">
                <Row>
                    <Col
                        className="form"
                        id="formpay"
                        sm={{
                            offset: 1,
                            size: 7,
                        }}
                    >
                        <Card className='shadow'>
                            <CardBody>
                                <Box
                                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }} className="row"
                                >
                                    <div className='col-md-3 p-0'>
                                        <Tabs
                                            orientation="vertical"
                                            variant="scrollable"
                                            value={value}
                                            onChange={handleChange}
                                            aria-label="Vertical tabs example"
                                            sx={{ borderRight: 1, borderColor: 'divider' }}
                                        >
                                            <Tab className='fw-bold' label="Thẻ thanh toán" {...a11yProps(0)} />
                                            <Tab className='fw-bold' label="Chuyển khoản ngân hàng" {...a11yProps(1)} />
                                            <Tab className='fw-bold' label="Thẻ ATM nội địa" {...a11yProps(2)} />
                                        </Tabs>
                                    </div>
                                    <div className='col-md-9 p-0'>
                                        <TabPanel value={value} index={0}>
                                            <PaymentCard />
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            Hệ thống đang bảo trì...!
                                        </TabPanel>
                                        <TabPanel value={value} index={2}>
                                            <ATMCard />
                                        </TabPanel>
                                    </div>
                                </Box>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col
                        sm={{
                            size: 3,
                        }}
                    >
                        <CheckInfo />
                    </Col>
                </Row>
            </Container>
        </>
    );
}