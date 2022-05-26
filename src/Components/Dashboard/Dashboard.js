import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-dashboard-btn" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-dashboard-btn" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            {admin ? (
              <>
                <li>
                  <NavLink to="/dashboard/add-product">Add Product</NavLink>
                </li>
                <li>
                  <NavLink className="my-2" to="/dashboard/manage-order">
                    Manage Orders
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink className="my-2" to="/dashboard/manage-product">
                    Manage Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/alluser">All User</NavLink>
                </li>
                <li>
                  <NavLink className="mb-2" to="/dashboard/myprofile">
                    My Profile
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink className="mb-2" to="/dashboard/myprofile">
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">My Orders</NavLink>
                </li>
                <li>
                  <NavLink className="my-2" to="/dashboard/addreview">
                    Add Review
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
