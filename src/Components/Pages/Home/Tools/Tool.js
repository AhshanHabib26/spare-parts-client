import React from "react";

const Tool = ({product}) => {
    const {Image, Description, MinOrder, Name, Price, AvailableQunatity, _id } = product

  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className=" shrink-0 w-full h-auto hover:scale-75 transition-all ease-in-out cursor-pointer" src={Image} alt="" />
        </figure>
        <div class="card-body gap-0">
          <h2 className=" text-xl font-semibold text-primary mb-2">{Name.slice(0, 50)}</h2>
          <p className=" text-info mb-3">{Description.slice(0, 90)}</p>
          <p className="text-lg  text-primary">Unit Price: <small className=" text-lg font-medium text-error">$ {Price} / Item </small></p>
          <p className="text-lg  text-primary ">Min Order: <small className=" text-lg font-medium text-error">{MinOrder} / Items</small></p>
          <p className="text-lg  text-primary">Available Quantity: <small className=" text-lg font-medium text-warning">{AvailableQunatity}</small> </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
