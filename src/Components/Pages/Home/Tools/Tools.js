import React from "react";
import Spinner from "../../../Spinner/Spinner";
import Tool from "./Tool";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const Tools = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("repoData", () =>
    fetch("https://motor-parts-263.herokuapp.com/product").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return toast.error("Please Refreash Your Page");
  }

  const dicProducts = products.slice(0, 6);

  return (
    <div className="md:container md:mx-auto">
      <h2 className=" text-center md:text-left lg:text-left  text-primary text-2xl font-semibold my-4">
        {" "}
        Our Best Auto Spare Parts Accessories
      </h2>
      <div className=" px-4 md:px-0 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-5">
        {dicProducts.map((product) => (
          <Tool product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
