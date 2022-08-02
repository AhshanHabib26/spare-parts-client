import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import LogoImg from "../../images/logo.png";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <HashLink to="/">Home</HashLink>
              </li>
              <li>
                <HashLink smooth className="my-2" to="#tools">
                  Products
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="#bussiness-summary">
                  Summary
                </HashLink>
              </li>

              <li>
                <HashLink smooth className="my-2" to="#customer-reviews">
                  Reviews
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="#blog">
                  Blog
                </HashLink>
              </li>

              <li>
                <HashLink className="my-2" smooth to="#contact-us">
                  Contact Us
                </HashLink>
              </li>

              {user && (
                <>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <img to="/" className="btn btn-ghost" src={LogoImg} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <HashLink to="/">Home</HashLink>
            </li>

            <li>
              <HashLink smooth className="mx-2" to="#tools">
                Products
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="#bussiness-summary">
                Summary
              </HashLink>
            </li>

            <li>
              <HashLink smooth className="mx-2" to="#customer-reviews">
                Reviews
              </HashLink>
            </li>

            <li>
              <HashLink smooth className="mx-2" to="#blog">
                Blog
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="#contact-us">
                Contact Us
              </HashLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              className="btn bg-error text-white btn-ghost"
              onClick={logout}
            >
              Log out
            </button>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn bg-error text-white btn-ghost">
                Register
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/login">LogIn</NavLink>
                </li>
                <li className="mt-2">
                  <NavLink to="/signup">SignUp</NavLink>
                </li>
              </ul>
            </div>
          )}
          <label
            htmlFor="my-dashboard-btn"
            tabIndex="1"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
