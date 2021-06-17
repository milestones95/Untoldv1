import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { WriterStripeOnboard } from "./WriterStripeOnboard";
import { PaymentIntent } from "./PaymentIntent";

const PUBLIC_KEY = "pk_test_51ITVA5CWDNwd4dEqWF9lYrv4LaDec9o5C3tmqndLWij9IBhS8psrVBVvLkRRtFUA5ETogobxPtmm5gWiGLM5Uvxr00neJQvx3S";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <WriterStripeOnboard />
    </Elements>
  );
};

export default Stripe;
