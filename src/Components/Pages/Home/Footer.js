import React from "react";
import { NavLink } from "react-router-dom";
import Branding from "../../../images/logo.png";

const Footer = () => {
  return (
    <div className=" mt-20">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src={Branding} alt="" />
          <p>
            AH Auto Parts Solutions Ltd. <br /> Providing Reliable Auto Parts Since 2018
          </p>
          <p>All Rights Reserved | AHAPS <br />  <span> Design By - <a className="text-error" href='https://www.linkedin.com/in/ahshanhabib26/'>Ahshan Habib</a> </span> </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <NavLink to='' className="link link-hover">Electrical & Electronics</NavLink>
          <NavLink to='' className="link link-hover">Construction</NavLink>
          <NavLink to='' className="link link-hover">Motorcycle Parts</NavLink>
          <NavLink to='' className="link link-hover">Transportation</NavLink>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <NavLink to='' className="link link-hover">About us</NavLink>
          <NavLink to='' className="link link-hover">Contact</NavLink>
          <NavLink to='' className="link link-hover">Jobs</NavLink>
          <NavLink to='' className="link link-hover">Press kit</NavLink>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <NavLink to='' className="link link-hover">Terms of use</NavLink>
          <NavLink to='' className="link link-hover">Privacy policy</NavLink>
          <NavLink to='' className="link link-hover">Cookie policy</NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
