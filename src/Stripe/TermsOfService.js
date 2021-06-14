import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";

export default function TermsOfService() {
  const agreeToTOS = async (event) => {
    event.preventDefault();
    try {
    const response = await axios.post(
      "http://localhost:8080/stripe/termsOfService",
      {
      }
    );

    // console.log('response:' + JSON.stringify(response));

        // console.log("account creation: ", response.data.success);

    }catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
  };
  return (
    <div>
      <p>Untold-ink use Stripe to make payouts to writers.
      The Stripe Recipient Agreement applies to your receipt of such Payouts.
      To receive payouts from Untold-ink, you must provide Untold-ink accurate
      and complete information about you and your business, and you authorize
      Untold-ink to share it and transaction information related to your payout with Stripe.</p>
      <form onSubmit={agreeToTOS} style={{ maxWidth: 400 }}>
        <button>I agree</button>
      </form>
    </div>
  );
}
