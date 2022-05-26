import React from "react";
import ProjectImg from '../../../images/Icons/project-management.png'
import WorkingImg from '../../../images/Icons/working.png'
import RatingImg from '../../../images/Icons/client.png'
import FeedImg from '../../../images/Icons/feedback.png'

const Feedbacke = () => {
  return (
    <div className=" bg-slate-100">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gpa-10 mt-24 mx-28 lg:mx-16">
        <div className="card w-[250px] h-[250px] bg-slate-200 mb-14 lg:mb-24 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={ProjectImg}
              alt="Project"
              className="rounded-xl w-[80px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-error text-2xl">50+</h2>
            <p className=" text-xl font-semibold">Project Completed!</p>
          </div>
        </div>
        <div className="card w-[250px] h-[250px] mb-14 lg:mb-24 bg-slate-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={WorkingImg}
              alt="Working"
              className="rounded-xl w-[80px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-error text-2xl">1426+</h2>
            <p className=" text-xl font-semibold">Working Hours!</p>
          </div>
        </div>
        <div className="card w-[250px] h-[250px] mb-14 lg:mb-24 bg-slate-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={RatingImg}
              alt="Rating"
              className="rounded-xl w-[80px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-error text-2xl">220+</h2>
            <p className=" text-xl font-semibold">Positive Feedbacks</p>
          </div>
        </div>
        <div className="card w-[250px] h-[250px] mb-14 lg:mb-24 bg-slate-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={FeedImg}
              alt="FeedBack"
              className="rounded-xl w-[80px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-error text-2xl">150+</h2>
            <p className=" text-xl font-semibold">Happy Client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacke;
