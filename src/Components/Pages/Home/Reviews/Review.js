import React from "react";

const Review = ({ review }) => {
  const { Name, Image, Review, Date, Rating } = review;
  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="card  bg-base-100 shadow-xl"
      >
        <figure className="px-10 pt-10">
          <img
            src={Image}
            alt="User"
            className=" ml-[-300px] rounded-full border-slate-100 w-[60px] border-2 p-2"
          />
        </figure>
        <div className="card-body pt-[16px]">
          <div className=" flex  items-center justify-between">
            <h2 className="card-title">{Name}</h2>
            <h2 className="text-lg font-semibold text-error">
              Rating: {Rating}
            </h2>
          </div>
          <p>{Review}</p>
          <p>Reviewed in : {Date}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
