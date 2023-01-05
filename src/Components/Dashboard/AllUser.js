import React, { useEffect, useState } from "react";
import User from "./User";

const AllUser = () => {
  const [users, setUsers] = useState([]);

 useEffect(() =>{
    fetch("https://spare-parts-server-production.up.railway.app/user", {
        method: "GET",
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then((res) => res.json())
    .then((data) => setUsers(data));
 },[])

  return (
    <div>
      <h2 className=" my-5 ml-5 lg:ml-0 text-xl font-semibold text-error">Total User: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Email</th>
              <th>Role</th>
              <th>Remove</th>
            </tr>
            {
                
            }
          </thead>
          <tbody>
            {users.map((user, index) => <User
            
            user={user}
            key={index}
            index={index}
            
            /> 
              
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
