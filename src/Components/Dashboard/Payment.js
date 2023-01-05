import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L2gIFHxk2FWNproJBm4cIZa9AQr5hy0Jc5mojbAGObSI62A0EsDnkB1C9OwvbhpCXJeMcf5VbVH53MDua0jJCna00dcU6uX4h"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://spare-parts-server-production.up.railway.app/userproducts/${id}`;

  const { data, isLoading } = useQuery(["product", id], () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    < >
      <div className="card   w-4/6  mt-44 mx-auto bg-emerald-100 shadow-2xl">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm data={data} />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
