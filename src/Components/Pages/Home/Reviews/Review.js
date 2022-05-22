import React from "react";

const Review = ({ review }) => {
  const { Image, Description } = review;
  return (
    <div>
      <div className=" box-border p-4 card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-6/12">
          <img  src={Image} alt="" />
        </figure>
        <div class="card-body gap-0 ">
          <h2 class="card-title">New album</h2>
          <p className=" text-left">{Description.slice(0, 80)}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
