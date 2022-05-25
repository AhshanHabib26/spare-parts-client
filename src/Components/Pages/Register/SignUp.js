import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../../Hooks/useToken";
import Spinner from "../../Spinner/Spinner";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [token] = useToken(user || gUser);

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      toast.success("Welcome, Join Our Community!!!");
    }
  });

  useEffect(() => {
    if (error || gError) {
      return toast("Please Try Again");
    }
  });

  if (loading || gLoading) {
    return <Spinner />;
  }

  const onSubmit = async (data) => {
    const userData = {
      Name: data.Name,
      Email: data.Email,
    };

    fetch("http://localhost:5000/userInfo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
      });

    await createUserWithEmailAndPassword(data.Email, data.Password);
    await updateProfile({ displayName: data.Name });
    
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

                <div class="divider">OR</div>

                <div className=" grid grid-cols-2 gap-x-6">
                  <button
                    onClick={() => signInWithGoogle()}
                    class="btn btn-error"
                  >
                    Google
                  </button>
                  <button class="btn btn-primary">Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
