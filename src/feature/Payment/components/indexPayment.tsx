import React, { useState, useEffect } from "react";
import {
	Appearance,
	loadStripe,
	StripeElementsOptions,
} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../../../App.css";
import PaymentForm from "./PaymentForm";
import axiosMethod from "../../../utils/api";
import { useNavigate, useParams } from "react-router-dom";

const stripePromise = loadStripe(
	"pk_test_51KwO8iLbEwIz3CNxIsaozMfqDUhK14xf7Ll2TPNmcZ6pBouaTximDnXFumk6QkWrAcvTGfCJyMnOkrQ9XxIaAR2I00WiTHf5C1"
);

export default function OnlinePayment() {
	const [clientSecret, setClientSecret] = useState("");
	const customer = JSON.parse(
		localStorage.getItem("user_info_payment") || "{}"
	);
	const params = useParams();
	const { id } = params;
	const navigate = useNavigate();

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		async function getClientSecret() {
			if (!customer.tongTien) {
				navigate(`/${id}/booking`);
			}
			const data = await axiosMethod(`bill/charge`, "post", {
				amount: customer.tongTien,
			});
			setClientSecret(data);
		}
		getClientSecret();
	}, []);

	const appearance: Appearance = {
		theme: "stripe",
	};
	const options: StripeElementsOptions = {
		clientSecret,
		appearance,
	};

	return (
		<div className="App">
			{clientSecret && customer ? (
				<Elements options={options} stripe={stripePromise}>
					<PaymentForm />
				</Elements>
			) : (
				<div>Error</div>
			)}
		</div>
	);
}
