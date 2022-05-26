import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useToken from "../../../Hooks/useToken";
import Spinner from "../../Spinner/Spinner";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [token] = useToken(user || gUser);

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      toast.success("Welcome, Back!!");
    }
  });

  useEffect(() => {
    if (error || gError) {
      toast.error(error.message);
    }
  });

  if (loading || gLoading) {
    return <Spinner />;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.Email, data.Password);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-accent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center">
            <h1 className="text-5xl text-primary shrink-0 font-bold">
              Welcome, Back!
            </h1>
            <p className="py-6 w-[380px]">
              To Keep Conected With Us And Our Community. Pleases Login With
              Your Personal Details.
            </p>
            <p>
              You Have Not An Account, Please?{" "}
              <Link className="text-error text-lg font-semibold" to="/signup">
                Signup
              </Link>{" "}
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className=" text-3xl mb-4 mt-[-10px]  font-semibold text-error">
                Login
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
                    {...register("Name")}
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
                    value="Login"
                  />
                </form>
                <div className="divider">OR</div>

                <div className=" grid grid-cols-2 gap-x-6">
                  <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-error"
                  >
                    Google
                  </button>
                  <button className="btn btn-primary">Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
