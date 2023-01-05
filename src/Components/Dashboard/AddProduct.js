import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const imageAPIKey = "672a876c49a0abb50cb4f6680c0f73d4";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
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
            Image: Image,
            Description: data.Description,
            Price: data.Price,
            MinOrder: data.MinOrder,
            AvailableQunatity: data.AvailableQunatity
          };
          console.log(dataInfo);

          const url = `https://spare-parts-server-production.up.railway.app/product`;
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
              if (result) {
                toast("Your Product  is Added");
              }
              reset();
            });
        }
      });
  };

  return (
    <div>
     
      <div>
        <div className="card  w-11/12  lg:w-10/12 mx-auto bg-base-100 shadow-xl">
          <div className="card-body ">
          <h1 className=" my-5 text-2xl  font-semibold text-error">Add Product</h1>
            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                placeholder="Product Name"
                type="text"
                className="input input-bordered w-full max-w-screen-sm"
                {...register("Name")}
              />
              <input
                placeholder="Product Description"
                className="input input-bordered w-full max-w-screen-sm"
                {...register("Description")}
              />
              <input
                placeholder="Per Unit Price"
                className="input input-bordered w-full max-w-screen-sm"
                {...register("Price")}
              />
              <input
                placeholder="Minimum Order"
                className="input input-bordered w-full max-w-screen-sm"
                {...register("MinOrder")}
              />
              <input
                placeholder="Available Quantity"
                className="input input-bordered w-full max-w-screen-sm"
                {...register("AvailableQunatity")}
              />

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
                  },
                })}
              />
              <input
                className="btn btn-primary w-4/12  "
                value="Add Product"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
