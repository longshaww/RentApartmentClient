import React, { useEffect, useState, useCallback } from "react";
import {
	PaymentElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import axiosMethod from "../../../utils/api";
import { useParams } from "react-router-dom";

export default function PaymentForm() {
	const stripe = useStripe();
	const elements = useElements();
	const params = useParams();
	const { id } = params;

	const [message, setMessage] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<any>(false);

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			"payment_intent_client_secret"
		);

		if (!clientSecret) {
			return;
		}

		stripe
			.retrievePaymentIntent(clientSecret)
			.then(({ paymentIntent }) => {
				switch (paymentIntent!.status) {
					case "succeeded":
						setMessage("Payment succeeded!");
						break;
					case "processing":
						setMessage("Your payment is processing.");
						break;
					case "requires_payment_method":
						setMessage(
							"Your payment was not successful, please try again."
						);
						break;
					default:
						setMessage("Something went wrong.");
						break;
				}
			});
	}, [stripe]);

	const postPaymentCB = useCallback((data: any) => {
		postPayment(data);
	}, []);

	async function postPayment(data: any) {
		const req = await axiosMethod("bill", "post", data);
		return req;
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const localInfoPayment = localStorage.getItem("user_info_payment");
		const customer = JSON.parse(localInfoPayment || "{}");

		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		setIsLoading(true);
		if (customer) {
			customer.paymentMethod = "Online";
			postPaymentCB(customer);
		}
		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: `http://${window.location.host}/${id}/booking/payment/success`,
			},
		});

		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.
		if (
			error.type === "card_error" ||
			error.type === "validation_error"
		) {
			setMessage(error.message);
		} else {
			setMessage("An unexpected error occured.");
		}

		setIsLoading(false);
	};

	return (
		<form
			id="payment-form"
			className="container mt-5"
			onSubmit={handleSubmit}
		>
			<PaymentElement id="payment-element" />
			<button
				disabled={isLoading || !stripe || !elements}
				className="btn btn-dark mt-5"
				id="submit"
			>
				<span id="button-text">
					{isLoading ? (
						<div className="spinner-border" role="status">
							<span className="visually-hidden">
								Loading...
							</span>
						</div>
					) : (
						"Pay now"
					)}
				</span>
			</button>
			{/* Show any error or success messages */}
			{message && <div id="payment-message">{message}</div>}
		</form>
	);
}
