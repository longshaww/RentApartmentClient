import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CheckInfo from "../components/CheckInfo";
import PaymentCard from "../components/PaymentCard";
import ATMCard from "../components/ATMCard";
import IndexPayment from "../components/indexPayment";
import { useParams } from "react-router-dom";
import axiosMethod from "../../../utils/api";
import globalStateAndAction from "../../../container/global.state.action";

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
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const Payments: React.FC<any> = ({ detailApartment, setDetailApartment }) => {
	const [value, setValue] = React.useState(0);
	const { id } = useParams();

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	useEffect(() => {
		async function getData() {
			const data = await axiosMethod(`apartment/${id}`, "get");
			setDetailApartment(data);
		}
		if (!detailApartment.maCanHo) {
			getData();
		}
	}, [id, setDetailApartment]);

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
						<Card className="shadow">
							<CardBody>
								<Box
									sx={{
										flexGrow: 1,
										bgcolor: "background.paper",
										display: "flex",
										height: 224,
									}}
									className="row"
								>
									<div className="col-md-3 p-0">
										<Tabs
											orientation="vertical"
											variant="scrollable"
											value={value}
											onChange={handleChange}
											aria-label="Vertical tabs example"
											sx={{
												borderRight: 1,
												borderColor:
													"divider",
											}}
										>
											<Tab
												className="fw-bold"
												label="Th??? thanh to??n"
												{...a11yProps(0)}
											/>
											<Tab
												className="fw-bold"
												label="Chuy???n kho???n ng??n h??ng"
												{...a11yProps(1)}
											/>
											<Tab
												className="fw-bold"
												label="Th??? ATM n???i ?????a"
												{...a11yProps(2)}
											/>
										</Tabs>
									</div>
									<div className="col-md-9 p-0">
										<TabPanel
											value={value}
											index={0}
										>
											<IndexPayment />
											<PaymentCard />
										</TabPanel>
										<TabPanel
											value={value}
											index={1}
										>
											H??? th???ng ??ang b???o tr??...!
										</TabPanel>
										<TabPanel
											value={value}
											index={2}
										>
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
};

export default globalStateAndAction(Payments);
