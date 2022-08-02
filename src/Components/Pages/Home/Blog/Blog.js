import React from "react";
import BlogImg from "../../../../images/Blog/SP_Blog.png";
import BlogImgOne from "../../../../images/Blog/SP_Blog_1.png";
import BlogImgTwo from "../../../../images/Blog/SP_Blog_2.png";
import { BiUserCircle, BiCalendar } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Blog = () => {
  return (
    <div className=" mb-10">
      <h1 className=" text-2xl lg:ml-8 ml-0  text-center lg:text-left font-bold text-primary my-6 ">
        Our Latest Blog
      </h1>
      <div className=" max-w-7xl mx-auto grid gap-5 px-5 lg:px-0  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          class="card card-compact w-full bg-base-100 shadow"
        >
          <figure>
            <img src={BlogImg} alt="Post" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Solid Square Torsion Axle Round Light Duty Trailer
            </h2>
            <p className=" text-right text-[16px] text-error  capitalize">
              Read more
            </p>
            <div className=" flex items justify-between mt-3 mb-2">
              <div className="admin flex items-center justify-center">
                <BiUserCircle size="22px" color="#6B7280" />
                <h1 className=" text-md uppercase  ml-1 font-semibold text-gray-500">
                  Ahshan Habib
                </h1>
              </div>
              <div className="calender flex items-center justify-center">
                <BiCalendar size="22px" color="#6B7280" />
                <h1 className="text-md uppercase  ml-1 font-semibold text-gray-500">
                  26-11-2021
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          class="card card-compact w-full bg-base-100 shadow"
        >
          <figure>
            <img src={BlogImgTwo} alt="Post" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Private Label or Ccr OHSAS18001 Approved Pallet
            </h2>
            <p className=" text-right text-[16px] text-error  capitalize">
              Read more
            </p>
            <div className=" flex items justify-between mt-3 mb-2">
              <div className="admin flex items-center justify-center">
                <BiUserCircle size="22px" color="#6B7280" />
                <h1 className=" text-md uppercase  ml-1 font-semibold text-gray-500">
                  Amdad Hossain
                </h1>
              </div>
              <div className="calender flex items-center justify-center">
                <BiCalendar size="22px" color="#6B7280" />
                <h1 className="text-md uppercase  ml-1 font-semibold text-gray-500">
                  26-11-2021
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="2000"
          class="card card-compact w-full bg-base-100 shadow"
        >
          <figure>
            <img src={BlogImgOne} alt="Post" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Tight Tolerance Metal Auto Holder by CNC Machinery
            </h2>
            <p className=" text-right text-[16px] text-error  capitalize">
              Read more
            </p>
            <div className=" flex items justify-between mt-3 mb-2">
              <div className="admin flex items-center justify-center">
                <BiUserCircle size="22px" color="#6B7280" />
                <h1 className=" text-md uppercase  ml-1 font-semibold text-gray-500">
                  Mahbub Alom
                </h1>
              </div>
              <div className="calender flex items-center justify-center">
                <BiCalendar size="22px" color="#6B7280" />
                <h1 className="text-md uppercase  ml-1 font-semibold text-gray-500">
                  26-11-2021
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
