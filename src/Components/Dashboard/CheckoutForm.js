import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transaction, setTransaction] = useState("");
  const { _id, TotalAmount, Email, UserName } = data;

  useEffect(() => {
    fetch("https://spare-parts-server-production.up.railway.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ TotalAmount }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [TotalAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message || "");
      setSuccess("");
    } else {
      setCardError("");
    }

    const { paymentIntent, paymentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: UserName,
            email: Email,
          },
        },
      }
    );
    if (paymentError) {
      setCardError(paymentError?.message);
      success("");
    } else {
      setCardError("");
      setTransaction(paymentIntent.id);
      setSuccess("Your Payment Is Completed");

      const payment = {
        productBuying: _id,
        transaction: paymentIntent.id,
      };

      fetch(`https://spare-parts-server-production.up.railway.app/userproducts/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
        //   console.log(data);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn w-24 btn-primary mt-12"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>

      {cardError && <p className="text-error">{cardError}</p>}
      {success && <p className="text-primary">{success}</p>}
    </>
  );
};

export default CheckoutForm;
