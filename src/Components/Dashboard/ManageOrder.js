import React, { useEffect, useState } from "react";
import Order from "./Order";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://spare-parts.onrender.com/userproducts")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h1 className=" my-5 ml-5 lg:ml-0 text-xl font-semibold text-error">Manage Order</h1>
      <div className=" px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {" "}
        {orders.map((order) => (
          <Order order={order} key={order._id} />
        ))}
      </div>
    </div>
  );
};

export default ManageOrder;
