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
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/review",
        element: <Review></Review>,
      },
      {
        path: "/dashboard/manageOrders",
        element: <ManageOrders></ManageOrders>,
      },
      {
        path: "/dashboard/allProducts",
        element: <ViewAllProducts></ViewAllProducts>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);
export default router;
