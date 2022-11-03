import React from "react";
import { toast } from "react-toastify";

const User = ({ user, index }) => {
  const { Email, role , _id} = user;
  const handleUserAdmin = () => {
    fetch(`https://spare-parts.onrender.com/user/admin/${Email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Forbiden Access");
        }

        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully Make An Admin");
        }
      });  
  };

  const handaleDelete =(id) =>{
    const procceed = window.confirm("Are You Sure You Want To Delete?");
    if (procceed) {
      const url = `https://spare-parts.onrender.com/user/${id}`;
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
    <tr>
      <th>{index + 1}</th>
      <td>{user.Email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={handleUserAdmin} className="btn btn-primary btn-sm">
            Make Admin
          </button>
        ) : (
          <button className="btn btn-primary btn-sm">Already Admin</button>
        )}
      </td>
      <td>
        <button onClick={() => handaleDelete(_id)} className="btn btn-error btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default User;
