import React from "react";
import { toast } from "react-toastify";


const Quote = () => {
  const handaleOrderBtn = (e) => {
    const productName = e.target.productName.value;
    const Email = e.target.Email.value;
    const Description = e.target.Description.value;
    const Qunatity = e.target.Qunatity.value;

    const data = {
      productName: productName,
      Email: Email,
      Description: Description,
      Qunatity: Qunatity,
    };

    fetch("https://motor-parts-263.herokuapp.com/quote", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {

        if(data){
          toast.success('Your Order Succesfully Submitted!')
        }
        console.log(data)
      });

    e.preventDefault();
  };

  return (
    <div className="max-w-2xl px-8 lg:px-0 mx-auto">
      <h1 className=" text-center mb-7 text-2xl text-error font-semibold">
        Want To Get Quote?
      </h1>
      <form className="" onSubmit={handaleOrderBtn}>
        <div class="form-control">
          <input
            type="text"
            name="Email"
            required
            placeholder="Enter Your Email"
            class="input input-bordered"
          />
        </div>
        <div class="form-control">
          <input
            type="text"
            name="productName"
            required
            placeholder="Product Name"
            class="input input-bordered my-3"
          />
        </div>
        <div class="form-control">
          <input
            type="text"
            name="Description"
            required
            placeholder="Product Description"
            class="input input-bordered  my-3"
          />
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="form-control">
            <input
              type="text"
              required
              placeholder="Purchase Quantity"
              name="Qunatity"
              class="input input-bordered text-warning"
            />
          </div>

          <div class="form-control">
            <button class="btn btn-primary">Order Confirm</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Quote;
