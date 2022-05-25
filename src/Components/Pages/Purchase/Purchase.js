import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Purchase = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const buttonRef = useRef();

  useEffect(() => {
    const url = `https://motor-parts-263.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  

  const handaleOrderBtn = (e) => {
    const orderQuantity = Number(item.MinOrder);
    const Quantity = e.target.OrderCount.value;
    const AvalQuantity = Number(item.AvailableQunatity);
    const newQuantity = Number(Quantity);
    const currPrice = Number(item.Price);
    const totalCost = currPrice * newQuantity;

    const Name = e.target.Name.value;
    const Email = e.target.Email.value;
    const userPhone = e.target.Phone.value;
    const address = e.target.Address.value;

    if (Quantity <= 0) {
      toast.warning("Your Order Quantity Items Is Blank!");
    } else if (orderQuantity > newQuantity) {
      buttonRef.current.disabled = true;
      toast.error(` Please Order Upto Minimum: ${item.MinOrder} Items`);
    } else if (AvalQuantity < newQuantity) {
      buttonRef.current.disabled = true;
      toast.error(` Please Order Maximum : ${item.AvailableQunatity} Items`);
    } else {
      buttonRef.current.disabled = false;
      const data = {
        Name: Name,
        Email: Email,
        userPhone: userPhone,
        Address: address,
        Price: item.Price,
        Quantity: Quantity,
        TotalAmount: totalCost,
      };

      fetch("https://motor-parts-263.herokuapp.com/userproducts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            toast.success(
              `Your Order Successfully Added: Payable Amount $ ${totalCost}`
            );
            navigate("/");
          }
        });
    }

    e.preventDefault();
  };

  return (
    <div>
      <div class="hero min-h-screen bg-accent">
        <div class="hero-content mx-auto flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <div class="card max-w-xl flex-shrink-0 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-auto w-[250px] hover:scale-75 transition-all ease-in-out cursor-pointer"
                  src={item.Image}
                  alt=""
                />
              </figure>
              <div class="card-body gap-0">
                <h2 className=" text-xl font-semibold text-primary mb-2">
                  {item.Name}
                </h2>
                <p className=" text-info mb-3">{item.Description}</p>
                <p className="text-lg  text-primary">
                  Unit Price:{" "}
                  <small className=" text-lg font-medium text-error">
                    $ {item.Price} / Item{" "}
                  </small>
                </p>
                <p className="text-lg  text-primary ">
                  Min Order:{" "}
                  <small className=" text-lg font-medium text-error">
                    {item.MinOrder} / Items
                  </small>
                </p>
                <p className="text-lg  text-primary">
                  Available Quantity:{" "}
                  <small className=" text-lg font-medium text-warning">
                    {item.AvailableQunatity}
                  </small>{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="card shrink-0 w-6/12 shadow-2xl bg-base-100">
            <div class="card-body">
              <h1 className="  mb-4 text-xl font-semibold text-primary">
                Product Details:
              </h1>
              <form onSubmit={handaleOrderBtn}>
                <div class="form-control">
                  <input
                    type="text"
                    name="Email"
                    value={user.email}
                    readOnly
                    disabled
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    name="Name"
                    value={item.Name}
                    readOnly
                    class="input input-bordered my-5"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div class="form-control">
                    <input
                      type="text"
                      name="Price"
                      readOnly
                      value={`$ ${item.Price} Unit Price`}
                      class="input input-bordered text-error text-md font-semibold"
                    />
                  </div>
                  <div class="form-control">
                    <input
                      type="text"
                      readOnly
                      name="AvailableQunatity"
                      value={`$ ${item.AvailableQunatity} Available Quantity`}
                      class="input input-bordered text-warning font-semibold my-4"
                    />
                  </div>
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    name="Phone"
                    required
                    placeholder="Enter Your Mobile Number"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <input
                    type="text"
                    name="Address"
                    required
                    placeholder="Enter Your Address"
                    class="input input-bordered my-4"
                  />
                </div>
                <div class="form-control">
                  <input
                    type="number"
                    name="OrderCount"
                    placeholder="Order Quantity"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control mt-6">
                  <button
                    ref={buttonRef}
                    class="btn btn-primary"
                  >
                    Order Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
