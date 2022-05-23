import React from "react";

const MyOrder = ({ order }) => {
  const { Name,  Price, Quantity, TotalAmount } = order;
  return (
    <div>
      <div class="card h-[250px] w-full bg-neutral text-neutral-content">
        <div class="card-body ">
          <h2 className="text-md font-semibold text-primary">{Name}</h2>
          <div className=" my-2 flex  justify-evenly items-center">
              <h2 className=" text-primary text-md font-semibold">Unit Price: ${Price}</h2>
              <h2 className=" text-error text-md font-semibold">Order Quantity: {Quantity}</h2>
          </div>
          <h2 className="text-lg text-error text-center font-bold">Payaed Amount: $ {TotalAmount}</h2>
          <div class="card-actions mt-6  justify-evenly">
            <button class="btn btn-primary w-1/3">Pay</button>
            <button class="btn btn-error w-1/3">Cencel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
