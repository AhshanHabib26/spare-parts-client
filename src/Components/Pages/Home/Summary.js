import React from "react";
import ServiceImage from "../../../images/Icons/customer-service.png";
import RatingImage from "../../../images/Icons/rating.png";
import RevenueImage from "../../../images/Icons/revenue.png";
import ToolImage from "../../../images/Icons/tool-box.png";

const Summary = () => {
  return ( 
    <div id='bussiness-summary' className="my-6 mx-0 p-14 bg-neutral">
      <div className=" w-9/12 mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
        <div className="card p-2 w-full shadow-lg">
          <figure>
            <img
              src={ServiceImage}
              alt="Shoes"
              className="rounded-xl w-[80px]"
            />
          </figure>
          <div className="card-body pt-3 gap-0 items-center text-center">
            <h2 className=" text-xl font-semibold text-error" >100+ </h2>
            <p className=" text-lg font-semibold text-primary">Service Provide</p>
          </div>
        </div>
        <div className="card p-2 w-full shadow-lg">
          <figure>
            <img
              src={RevenueImage}
              alt="Shoes"
              className="rounded-xl w-[80px]"
            />
          </figure>
          <div className="card-body pt-3 gap-0 items-center text-center">
            <h2 className=" text-xl font-semibold text-error" >120M+ </h2>
            <p className=" text-lg font-semibold text-primary">Annual Revenue</p>
          </div>
        </div>
        <div className="card p-2 w-full shadow-lg">
          <figure>
            <img
              src={RatingImage}
              alt="Shoes"
              className="rounded-xl w-[80px]"
            />
          </figure>
          <div className="card-body pt-3 gap-0 items-center text-center">
            <h2 className=" text-xl font-semibold text-error" >35K+</h2>
            <p className=" text-lg font-semibold text-primary">Client Reviews</p>
          </div>
        </div>
        <div className="card py-2 w-full shadow-lg">
          <figure>
            <img
              src={ToolImage}
              alt="Tools"
              className="rounded-xl w-[80px]"
            />
          </figure>
          <div className="card-body pt-3 gap-0 items-center text-center">
            <h2 className=" text-xl font-semibold text-error" >50+</h2>
            <p className=" text-lg font-semibold text-primary">Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
