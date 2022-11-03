import { useEffect, useState } from "react";

const useBlog = () => {
    const [blogs , setBlogs] = useState([])

    useEffect( () =>{
        fetch('https://spare-parts.onrender.com/blogPost')
        .then( res => res.json())
        .then(data => setBlogs(data))
    },[])


  return  [blogs, setBlogs]
};

export default useBlog;