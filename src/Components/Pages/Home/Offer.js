import React from "react";
import Styles from '../../Styles/Offer.module.css'
import { HashLink } from "react-router-hash-link";

const Offer = () => {
  return (
    <div className={Styles.OfferBanner}>
      <div className=" py-36 flex flex-col items-center justify-center">
        <h1 className=" text-neutral text-3xl lg:text-5xl font-extrabold">Find Out Discount & Contact</h1>
        <h1 className=" text-lg lg:text-2xl text-neutral my-2">Top Quality Selection And Get Our Experts Advice!</h1>
        <HashLink smooth to="#tools" className=" btn btn-error ">Shop Now</HashLink>
      </div>
    </div>
  );
};

export default Offer;
