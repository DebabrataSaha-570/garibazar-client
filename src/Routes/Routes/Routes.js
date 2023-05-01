import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLayout from "../../Layout/DashboardLayout";
import Payment from "../../Pages/Dashboard/Payment";
import Review from "../../Pages/Dashboard/Review";
import ManageOrders from "../../Pages/Dashboard/ManageOrders";
import ViewAllProducts from "../../Pages/Dashboard/ViewAllProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct";
import ViewAllCars from "../../Pages/Home/ViewAllCars/ViewAllCars";
import Explore from "../../Pages/Explore/Explore";
import ProductDetail from "../../Pages/ProductDetail/ProductDetail";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/explore",
        element: <Explore></Explore>,
      },
      {
        path: "/viewAllCars/:bodyType",
        element: <ViewAllCars></ViewAllCars>,
      },
      {
        path: "/productDetail/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ProductDetail></ProductDetail>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/viewAllCars/:bodyType",
        element: <ViewAllCars></ViewAllCars>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            {" "}
            <Dashboard></Dashboard>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <PrivateRoute>
            {" "}
            <Payment></Payment>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/review",
        element: (
          <PrivateRoute>
            {" "}
            <Review></Review>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers></AllUsers>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageOrders",
        element: (
          <AdminRoute>
            {" "}
            <ManageOrders></ManageOrders>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allProducts",
        element: (
          <AdminRoute>
            {" "}
            <ViewAllProducts></ViewAllProducts>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <AdminRoute>
            {" "}
            <AddProduct></AddProduct>{" "}
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
