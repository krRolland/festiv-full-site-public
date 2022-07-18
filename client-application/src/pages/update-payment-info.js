import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import api from "../util/api"
import UpdatePaymentModule from "./update-payment-module"


const stripePromise = api.getPublicStripeKey().then(key => loadStripe(key));

export default function UpdatePaymentInfo() {
    return (
    <Elements stripe={stripePromise}>
        <UpdatePaymentModule />
    </Elements>
    )
}   