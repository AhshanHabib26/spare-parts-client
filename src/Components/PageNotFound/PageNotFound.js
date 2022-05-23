import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../../images/PageNotFound.gif";
import './PageNotFound.css'

const PageNotFound = () => {
    const navigate = useNavigate()
    const handleBackBtn = () =>{
        navigate('/')
    }
  return (
    <div className="container">
      <div className=" relative">
        <img  className=" relative d-flex mx-auto  my-4" src={NotFoundImg} alt="" />
        <button  onClick={handleBackBtn} className="pageBack absolute lg:bottom-12 rounded-3xl hover:bg-primary transition-all ease-in-out cursor-pointer " >Back To Home</button>
      </div>
      
    </div>
  );
};

export default PageNotFound;
