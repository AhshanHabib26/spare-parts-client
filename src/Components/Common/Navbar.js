import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import LogoImg from "../../images/logo.png";

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const logout = () => {
    signOut(auth);
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li tabIndex="0">
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <NavLink to="/">Submenu 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Submenu 2</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/">Item 3</NavLink>
              </li>
            </ul>
          </div>
          <img to="/" className="btn btn-ghost" src={LogoImg} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li tabIndex="0">
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <NavLink to="/submenu">Submenu 1</NavLink>
                </li>
                <li>
                  <NavLink to="/submenu1">Submenu 2</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/submenu2">Item 3</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button class="btn bg-error text-white btn-ghost" onClick={logout}>
              Log out
            </button>
          ) : (
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn bg-error text-white btn-ghost">
                Register
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
