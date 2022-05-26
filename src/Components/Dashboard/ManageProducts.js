import React from "react";
import { toast } from "react-toastify";
import useProduct from "../../Hooks/useProduct";

const ManageProducts = () => {
  const [products] = useProduct();

  const handleDelete = (id) =>{
    const procced = window.confirm('Are You Sure Want To Delete')
    if(procced){
      const url = `https://motor-parts-263.herokuapp.com/product/${id}`
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
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
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
                  <button class="btn btn-primary btn-sm">Edit</button>
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
