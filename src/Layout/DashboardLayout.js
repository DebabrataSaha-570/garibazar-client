import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import DashboardNavbar from "../Pages/Dashboard/DashboardNavbar";
import {
  FaListUl,
  FaPlus,
  FaRegCommentDots,
  FaComment,
  FaClipboardList,
} from "react-icons/fa";
import {
  MdManageAccounts,
  MdOutlinePayment,
  MdOutlinePayments,
} from "react-icons/md";
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
        <div className="drawer-content bg-[--dashboardOutlet]  ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[--dashboardNav] text-[--dashboardText]">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary text-black rounded-lg" : ""
                }
                to="/dashboard"
                end
              >
                {" "}
                <FaListUl className="text-[20px]"></FaListUl> My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary text-black rounded-lg" : ""
                }
                to="/dashboard/payment"
              >
                {" "}
                <MdOutlinePayments className="text-[20px]"></MdOutlinePayments>{" "}
                Payment
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary text-black rounded-lg" : ""
                }
                to="/dashboard/review"
              >
                {" "}
                <FaRegCommentDots className="text-[20px]"></FaRegCommentDots>{" "}
                Review
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary text-black rounded-lg" : ""
                }
                to="/dashboard/manageOrders"
              >
                {" "}
                <MdManageAccounts className="text-[20px]"></MdManageAccounts>{" "}
                Manage Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary text-black rounded-lg" : ""
                }
                to="/dashboard/allProducts"
              >
                {" "}
                <FaClipboardList className="text-[20px]"></FaClipboardList> View
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary text-black rounded-lg" : ""
                }
                to="/dashboard/addProduct"
              >
                {" "}
                <FaPlus></FaPlus> Add Product
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
