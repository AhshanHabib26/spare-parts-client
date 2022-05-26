import React from "react";
import BannerImg from '../../../images/Habib.png'

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen  bg-slate-100 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={BannerImg}
            alt='Habib'
            className="max-w-sm  lg:max-w-md"
          />
          <div>
            <h1 className="text-lg text-error font-bold">I'm Ahshan Habib</h1>
            <p className=" text-4xl lg:text-6xl mb-5">
              I Am a Crative <br /> <span className=" text-error text-opacity-60 font-semibold font">Frontend Web Designer</span> <br /> From Bangladesh
            </p>
            <button className="btn btn-error">Get Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
