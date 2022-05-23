import React from "react";
import { toast } from "react-toastify";

const User = ({ user, index }) => {
  const { Email, role } = user;
  const handleUserAdmin = () => {
    fetch(`https://motor-parts-263.herokuapp.com/user/admin/${Email}`, {
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

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.Email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={handleUserAdmin} class="btn btn-primary btn-sm">
            Make Admin
          </button>
        ) : (
          <button class="btn btn-primary btn-sm">Already Admin</button>
        )}
      </td>
      <td>
        <button class="btn btn-error btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default User;
