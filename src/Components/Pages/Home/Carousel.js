import React from "react";
import BannerImg from "../../../images/Banner/Banner (1).png";
import BannerImg1 from "../../../images/Banner/Banner (2).png";
import BannerImg2 from "../../../images/Banner/Banner (3).png";

const Carousel = () => {
  return (
    <div className=" bg-neutral">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-screen ">
          <img src={BannerImg} className="w-screen" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-screen">
          <img src={BannerImg1} className="w-screen" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-screen">
          <img src={BannerImg2} className="w-screen" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
