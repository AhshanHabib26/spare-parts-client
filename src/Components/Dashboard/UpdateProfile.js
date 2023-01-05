import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from '../../firebase.init';
const imageAPIKey = "672a876c49a0abb50cb4f6680c0f73d4";


const UpdateProfile = () => {
 const { register, handleSubmit, reset } = useForm();
 const [user] = useAuthState(auth);
 const userEmail = user?.email
 
  const onSubmit = (data) => {
    const Image = data.Image[0];
    const formData = new FormData();
    formData.append("image", Image);
    const APIurl = `https://api.imgbb.com/1/upload?key=${imageAPIKey}`;
    fetch(APIurl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          const Image = response.data.url;
          const dataInfo = {
            Phone: data.Phone,
            Image: Image,
            EducationLabel: data.EducationLabel,
            EducationDeg: data.EducationDeg,
            InstitutionName: data.InstitutionName,
            Github: data.Github,
            Portfolio: data.Portfolio,
            Linkedin: data.Linkedin
          };
          console.log(dataInfo);

          const url = `https://spare-parts-server-production.up.railway.app/userInfo/${userEmail}`;
          fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(dataInfo),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result) {
                toast("Your Profile is Update");
              }
              reset();
            });
        }
      });
  };

  return (
    <div>
      <h2 className=" text-center mt-6 text-xl text-error font-semibold">
        Update Your Profile!
      </h2>
      <>
        <div className="card   max-w-screen-sm mx-auto">
          <div className="card-body ">
            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                value={user.displayName}
                readOnly
                className="input input-bordered w-full max-w-screen-sm"
                {...register("Name")}
              />
              <input
                value={user?.email}
                readOnly
                className="input input-bordered w-full max-w-screen-sm"
                {...register("Email")}
              />
              <input
                placeholder='Your Phone Number'
                type='tel'
                className="input input-bordered w-full max-w-screen-sm"
                {...register("Phone")}
              />

              <h2>Your Profile Image: </h2>
              <input
                type="file"
                className="input input-bordered w-full max-w-screen-sm py-6 h-20"
                {...register("Image", {
                  validate: {
                    lessThan10MB: (files) =>
                      files[0]?.size < 10000000 || "Max 10MB",
                    acceptedFormats: (files) =>
                      ["image/jpeg", "image/png", "image/gif"].includes(
                        files[0]?.type
                      ) || "Only PNG, JPEG e GIF",
                  } 
                })}

              />

              <h2>Education:</h2>
            <input
                placeholder='Education Label'
                type='text'
                className="input input-bordered w-full max-w-screen-sm"
                {...register("EducationLabel")}
              />
              <input
                placeholder='Your Subject'
                type='text'
                className="input input-bordered w-full max-w-screen-sm"
                {...register("EducationDeg")}
              />
              <input
                placeholder='Institution Name'
                type='text'
                className="input input-bordered w-full max-w-screen-sm"
                {...register("InstitutionName")}
              />

                <h2>Social Link:</h2>

              <input
                placeholder='Github Profile'
                type='url'
                className="input input-bordered w-full max-w-screen-sm"
                {...register("Github")}
              />
              <input
                placeholder='Portfolio Link'
                type='url'
                className="input input-bordered w-full max-w-screen-sm"
                {...register("Portfolio")}
              />
              <input
                placeholder='Linkedin Profile Link'
                type='url'
                className="input input-bordered w-full max-w-screen-sm"
                {...register("Linkedin")}
              />


              <input
                className="btn btn-primary "
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default UpdateProfile;