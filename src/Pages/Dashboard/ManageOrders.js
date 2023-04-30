import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleManageOrder from "./SingleManageOrder";
import Spinner from "../../Components/Spinner";
import { toast } from "react-hot-toast";

const ManageOrders = () => {
  const [allBookings, setAllBookings] = useState([]);
  useEffect(() => {
    axios
      .get("https://gari-bazar-server.onrender.com/allBookings")
      .then((res) => {
        console.log(res.data);
        setAllBookings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure, you want to delete this?");
    if (confirm) {
      axios
        .delete(`https://gari-bazar-server.onrender.com/deleteBooking/${id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            toast.success("Booking Deleted Successfully");
            const newBookings = allBookings.filter(
              (booking) => booking._id !== id
            );

            setAllBookings(newBookings);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong. Please try again later.");
        });
    }
  };

  const handleApprove = (id) => {
    const confirm = window.confirm("Are you sure, you want to approve this?");
    if (confirm) {
      fetch(`https://gari-bazar-server.onrender.com/booking/${id}`, {
        method: "PUT",
        body: JSON.stringify({ status: "Approved" }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            toast.success("Booking Approved Successfully");

            fetch("https://gari-bazar-server.onrender.com/allBookings")
              .then((res) => res.json())
              .then((data) => {
                setAllBookings(data);
              });
          }
        });
    }
  };

  return (
    <section>
      <h3 className="text-3xl text-center my-3">Manage Orders</h3>
      <div>
        <div className="overflow-x-auto p-3">
          {allBookings.length ? (
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Product</th>
                  <th>Booking Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allBookings.map((booking) => (
                  <SingleManageOrder
                    key={booking._id}
                    booking={booking}
                    handleDelete={handleDelete}
                    handleApprove={handleApprove}
                  ></SingleManageOrder>
                ))}
              </tbody>
            </table>
          ) : (
            <Spinner></Spinner>
          )}
        </div>
      </div>
    </section>
  );
};

export default ManageOrders;
