import React from "react";

const MyOrder = ({ order }) => {
  const { Name,  Price, Quantity, TotalAmount } = order;
  return (
    <div>
      <div class="card h-[280px] w-full bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 className="text-md font-semibold text-primary">{Name}</h2>
          <div className=" my-2 flex justify-center items-center">
              <h2 className=" text-primary text-md font-semibold">Unit Price: ${Price}</h2>
              <h2 className=" text-error text-md font-semibold">Order Quantity: {Quantity}</h2>
          </div>
          <h2 className="text-lg text-error font-bold">Payaed Amount: $ {TotalAmount}</h2>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Pay</button>
            <button class="btn btn-error">Cencel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
