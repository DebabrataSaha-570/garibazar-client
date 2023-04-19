import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "../Pages/Dashboard/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <DashboardNavbar></DashboardNavbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content  ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-primary text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/payment">Payment</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Review</Link>
            </li>
            <li>
              <Link to="/dashboard/manageOrders">Manage Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/allProducts">View All Products</Link>
            </li>
            <li>
              <Link to="/dashboard/addProduct">Add Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
