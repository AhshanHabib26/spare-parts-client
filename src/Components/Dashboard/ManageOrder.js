import React, { useEffect, useState } from "react";
import Order from "./Order";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://motor-parts-263.herokuapp.com/userproducts")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h1 className=" my-5 text-xl font-semibold text-error">Manage Order</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
        {" "}
        {orders.map((order) => (
          <Order order={order} key={order._id} />
        ))}
      </div>
    </div>
  );
};

export default ManageOrder;
