import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import AvatarImag from "../../images/avatar.png";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState({});
  const {
    Image,
    Phone,
    EducationDeg,
    EducationLabel,
    Github,
    InstitutionName,
    Linkedin,
    Portfolio,
  } = userData;
  const userEmail = user?.email;

  useEffect(() => {
    const url = `https://motor-parts-263.herokuapp.com/userInfo/${userEmail}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div>
      <div className="flex mx-8 lg:mx-0 items-center justify-between mr-4">
        <h1 className="my-4 text-2xl text-error font-semibold">My Profile</h1>
        <div>
          <Link className="btn  hover:text-white" to="update">
            Edit
          </Link>
        </div>
      </div>
      <div className="card w-full bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src={Image ? Image : AvatarImag}
            alt="UploadImage"
            className="rounded-xl w-[150px]"
          />
        </figure>
        <div className="card-body ">
          <h2 className="text-xl font-semibold mb-4">Profile Information :</h2>

          <h2 className=" text-[18px] text-primary font-semibold ">
            Name: <small className=" text-error">{user?.displayName}</small>
          </h2>
          <h2 className=" text-[18px] text-primary font-semibold ">
            Email Address: <small className=" text-error">{user?.email}</small>
          </h2>
          <h2 className=" text-[18px] text-primary font-semibold ">
            Mobile Number: <small className=" text-error">{Phone}</small>
          </h2>

          <h2 className="text-xl font-semibold my-4">
            Education Information :
          </h2>
          <h2 className=" text-[18px] text-primary font-semibold ">
            Education Degree:{" "}
            <small className=" text-error">{EducationLabel}</small>
          </h2>
          <h2 className=" text-[18px] text-primary font-semibold ">
            Subject: <small className=" text-error">{EducationDeg}</small>
          </h2>
          <h2 className=" text-[18px] text-primary font-semibold ">
            Education Board:{" "}
            <small className=" text-error">{InstitutionName}</small>
          </h2>
          <h2 className="text-xl font-semibold my-4">Social Information :</h2>

          <div className=" flex items-center justify-evenly">
            <button className=" btn btn-xl btn-primary">
              <a href={Github}>Github</a>
            </button>
            <button className=" btn btn-xl btn-secondary">
              <a href={Linkedin}>Linkedin</a>
            </button>
            <button className=" btn btn-xl btn-error">
              <a href={Portfolio ? Portfolio : Github}>Portfolio</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
