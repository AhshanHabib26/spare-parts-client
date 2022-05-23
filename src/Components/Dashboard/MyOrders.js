import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user?.email;
    const url = `https://motor-parts-263.herokuapp.com/userproducts?email=${email}`;
    if (user) {
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);

  return (
    <div className=" my-8 mx-4">
      <h1 className="my-4 text-xl text-error font-semibold">
        Your Orders :  {orders.length}
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
        {orders.map((order) => (
          <MyOrder order={order} key={order.key} />
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
