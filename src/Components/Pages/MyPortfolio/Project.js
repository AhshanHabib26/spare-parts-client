import React from "react";
import carHouse from "../../../images/CarHouse.png";
import HealthCare from "../../../images/HealthCare.png";
import TutoHome from "../../../images/TutorHome.png";

const Project = () => {
  return (
    <div className=" bg-slate-200">
      <h2 class="text-4xl lg:text-7xl italic uppercase text-opacity-20 text-primary font-bold text-center pt-5 ">
        My Projects
      </h2>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8 mx-12 py-16">
        <div class="card bg-slate-200 shadow-xl image-full">
          <figure>
            <img src={carHouse} alt="car" />
          </figure>
          <div class="card-body items-center justify-center ">
            <p className="flex-grow-0">Web Car Ware House</p>
            <h2 class="card-title text-center">The Ultimate Bussiness Car Ware House Services</h2>
            <div>
              <a
                className=" btn btn-primary mr-2"
                href="https://car-house-c5294.web.app/"
              >
                Live Link
              </a>
              <a
                className=" btn btn-error"
                href="https://github.com/AhshanHabib26/Car_WareHouse_With_React"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-slate-200 shadow-xl image-full">
          <figure>
            <img src={HealthCare} alt="Health" />
          </figure>
          <div class="card-body items-center justify-center">
            <p className=" flex-grow-0">Web Health Solution</p>
            <h2 class="card-title text-center">Your Health Solution Assistant Provider</h2>
            <div>
              <a
                className=" btn btn-primary mr-2"
                href="https://nh-health-care.netlify.app/"
              >
                Live Link
              </a>
              <a
                className=" btn btn-error"
                href="https://github.com/AhshanHabib26/NH_Health_Care"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-slate-200 shadow-xl image-full">
          <figure>
            <img src={TutoHome} alt="Tutor" />
          </figure>
          <div class="card-body items-center justify-center">
            <p className=" flex-grow-0">Web Education Service</p>
            <h2 class="card-title text-center">Web Based Education Service Application</h2>
            <div>
              <a
                className=" btn btn-primary mr-2"
                href="https://tutorh-7de1a.web.app/"
              >
                Live Link
              </a>
              <a
                className=" btn btn-error"
                href="https://github.com/AhshanHabib26/TutorHome_React"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
