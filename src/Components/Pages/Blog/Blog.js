import React from "react";

const Blog = ({ blog }) => {
    const {Name, Description, Image} = blog
  return (
    <div>
      <div class="card bg-base-100 shadow">
        <figure class="px-10 pt-10">
          <img
            src={Image}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body">
          <h2 className=" text-xl text-error  font-semibold hover:text-primary transition-all ease-in-out cursor-pointer">{Name}</h2>
         <p className=" text-lg text-slate-800 "> {Description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
