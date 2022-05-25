import React from "react";

const Order = ({ order }) => {
  const {
    Name,
    Email,
    UserName,
    Address,
    Price,
    Quantity,
    TotalAmount,
    transactionId,
  } = order;

  return (
    <div>
      <div class="card  bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 className=" text-md text-error font-bold">{Name}</h2>
          <p>Email: {Email}</p>
          <p>Customer Name: {UserName}</p>
          <p>Address: {Address}</p>
          <div className=" flex items-center justify-between">
            <p>Unit Price: <span className=" text-xl text-error font-semibold">$ {Price}</span></p>
            <p>Quantity: <span className=" text-xl font-semibold text-primary">{Quantity}</span></p>
          </div>

          <p>Total Amount : $ {TotalAmount}</p>
          {  transactionId ? (
            <p className=" text-primary text-md font-semibold">Paid: {transactionId}</p>
          ) : (
            <button className=" btn btn-error btn-normal mx-auto w-[120px]">Unpaid</button>
          )}

        </div>
      </div>
    </div>
  );
};

export default Order;
