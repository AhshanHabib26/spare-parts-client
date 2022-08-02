import React from "react";
import Styles from "../../Styles/Carousel.module.css";

const Carousel = () => {
  return (
    <div className={Styles.BannaerImage}>
      <div class="hero min-h-screen">
        <div class="hero-content text-center bg-primary rounded-3xl opacity-80 mx-5 lg:mx-0">
          <div class="max-w-xl py-4">
            <h1 className=" text-white text-lg lg:text-2xl">Explore The Best Parts Collection</h1>
            <h1 class="text-5xl lg:text-6xl text-white font-bold">Accessories Parts</h1>
            <p class="py-6 text-white">
              Like Saftey Equipmnet, OEM & ODM, Copper Wire, Solid Square
              Torison Axle Round Light, Tight Tolarence Meatal Auto Holder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
