import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {


        reset()
    }
  return (
    <div className=" bg-slate-100 pb-16">
      <h2 className="text-4xl lg:text-7xl italic uppercase text-opacity-20 text-primary font-bold text-center pt-5 ">
        Contact Us
        <div>
        <div className="card w-11/12 lg:w-8/12 mx-auto bg-slate-100 ">
          <div className="card-body ">
            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                placeholder="Enter Your Name"
                type="text"
                className="input input-bordered w-full"
                {...register("Name")}
              />
              <input
                placeholder="Enter Your Email"
                className="input input-bordered w-full"
                {...register("Email")}
              />
              </div>
              <input
                placeholder="Your Project Title"
                className="input input-bordered w-full max-w-screen-lg"
                {...register("Project")}
              />
              <textarea
                placeholder="Your Comment"
                className="input input-bordered w-full h-[150px] resize-none max-w-screen-lg"
                {...register("MinOrder")}
              />
              <input
                className="btn btn-primary "
                value="Send Message"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
      </h2>
    </div>
  );
};

export default Contact;
