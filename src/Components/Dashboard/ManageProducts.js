import React from "react";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";
import { useQuery } from "react-query";

const ManageProducts = () => {

  const {
    isLoading,
    error,
    data: products,
  } = useQuery("SparePartsData", () =>
    fetch("https://spare-parts-server.vercel.app/product").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return toast.error("Please Refreash Your Page");
  }


  const handleDelete = (id) =>{
    const procced = window.confirm('Are You Sure Want To Delete')
    if(procced){
      const url = `https://spare-parts-server.vercel.app/product/${id}`
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Delete Successfully!");
          }
        });
    }


      
  }

  return (
    <div>
      <h1 className='className=" ml-5 lg:ml-0 my-5 text-xl font-semibold text-error'>
        Manage All Products
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Count</th>
              <th>Product Name</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.Name}</td>
                <td>
                  <button onClick={() => handleDelete(product._id)} class="btn btn-error btn-sm">Delete</button>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
