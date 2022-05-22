import React, { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Spinner from "../../Spinner/Spinner";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      toast.success("Welcome, Join Our Comunity!!!");
    }
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return toast("Please Try Again");
  }

  const onSubmit = (data) => {
    fetch("https://motor-parts-263.herokuapp.com/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        
          console.log(result);
        
      });

    createUserWithEmailAndPassword(data.Email, data.Password);
  };

  return (
    <div>
      <div class="hero min-h-screen  bg-accent">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center ">
            <h1 class="text-5xl  font-bold text-primary">Hello, Friends!</h1>
            <p class="py-6 w-[380px]">
              Enter Your Personal Information And <br /> Start Journey With Us.
            </p>
            <p>
              Already Have An Account?{" "}
              <Link className="text-error text-lg font-semibold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <h1 className=" text-3xl mb-4 mt-[-10px]  font-semibold text-error">
                Signup
              </h1>
              <div>
                <form
                  className="grid grid-cols-1 gap-3"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    className="input input-bordered"
                    placeholder="Enter Your Name"
                    type="text"
                    {...register("Name", {
                      required: true,
                    })}
                  />
                  <input
                    className="input input-bordered"
                    placeholder="Enter Your Email"
                    type="email"
                    {...register("Email", { pattern: /\S+@\S+\.\S+/ })}
                  />
                  <input
                    placeholder="Password"
                    className="input input-bordered"
                    type="password"
                    {...register("Password")}
                  />
                  <input
                    className="btn btn-ghost bg-primary text-white"
                    type="submit"
                    value="Signup"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
