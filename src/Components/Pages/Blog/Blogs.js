import React from "react";
import useBlog from "../../../Hooks/useBlog";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs] = useBlog();

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 mx-4 lg:mx-12 my-6">
      {blogs.map((blog) => (
        <Blog blog={blog} key={blog._id} />
      ))}
    </div>
  );
};

export default Blogs;
