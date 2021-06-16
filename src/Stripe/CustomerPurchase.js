import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { supabase } from "../api/supabaseClient";
import { useParams } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51HevTDEdTRA1Rei3c76wSKc8hFjcEumOGFDTOsLgSKILa7jzv2xmy9sKZukoaypxeCLJh8Ubyp2lPQeHMJbUTZdi00Zjioxafj");

const CustomerPurchase = ({ handleClick }) => (
  <section>
    <button type="button" id="checkout-button" role="link" onClick={handleClick}>
      Checkout
    </button>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");
  const { slug } = useParams();
  const supabaseSession = supabase.auth.session()

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const { data, error } = await supabase
      .from('writer_payments')
      .select('account_id')
      .eq('user_id', slug)

      console.log('data: ' + JSON.stringify(data));
    const response = await fetch("http://localhost:8080/create-checkout-session", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ account_id: data[0].account_id })
  });

    const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <CustomerPurchase handleClick={handleClick} />
  );
}
