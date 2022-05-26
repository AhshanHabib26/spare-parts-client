import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const imageAPIKey = "672a876c49a0abb50cb4f6680c0f73d4";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const date = new Date();
  const today = date.toLocaleString();

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
            Name: data.Name,
            Review: data.Comment,
            Image: Image,
            Rating: data.Rating,
            Date: today,
          };
          console.log(dataInfo);

          const url = "https://motor-parts-263.herokuapp.com/review";
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(dataInfo),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.insertedId) {
                toast("Thanks, For Feedback Us!!");
              }
              reset();
            });
        }
      });
  };

  return (
    <div>
      <h2 className=" text-center my-8 text-xl text-error font-semibold">
        Your Valueable Comment, We Can Improve!
      </h2>
      <>
        <div class="card   max-w-screen-sm mx-auto shadow-xl">
          <div class="card-body ">
            <h2 className=" text-xl font-semibold text-error mb-2">
              Your Awesome Review!
            </h2>
            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                placeholder="Your Name"
                class="input input-bordered w-full max-w-screen-sm"
                {...register("Name", { required: true })}
              />
              <input
                placeholder="Rating Us (1 to 5)"
                type='number'
                class="input input-bordered w-full max-w-screen-sm"
                {...register("Rating", { min: 5 }, { required: true })}
              />
              <input
                placeholder="Your Comment"
                class="input input-bordered w-full max-w-screen-sm"
                {...register("Comment")}
              />
              <input
                type="file"
                class="input input-bordered w-full max-w-screen-sm py-6 h-20"
                {...register("Image", {
                  required: {
                    value: true,
                    
                    message: "Image is required",
                  },
                  validate: {
                    lessThan10MB: (files) =>
                      files[0]?.size < 10000000 || "Max 10MB",
                    acceptedFormats: (files) =>
                      ["image/jpeg", "image/png", "image/gif"].includes(
                        files[0]?.type
                      ) || "Only PNG, JPEG e GIF",
                  },
                  
                })}

              />
              <input
                className="btn btn-primary "
                value="Add Your Comment"
                type="submit"
              />
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddReview;
