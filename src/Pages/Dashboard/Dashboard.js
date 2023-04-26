import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import SingleMyOrder from "./SingleMyOrder";
import Spinner from "../../Components/Spinner";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking/${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setBookings(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDeleteBooking = (id) => {
    const confirmMessage = window.confirm(
      "Are you sure, you want to delete this?"
    );
    if (confirmMessage) {
      axios
        .delete(`http://localhost:5000/deleteBooking/${id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            toast.success("Booking Deleted Successfully");
            const newBookings = bookings.filter(
              (booking) => booking._id !== id
            );

            setBookings(newBookings);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong. Please try again later.");
        });
    }
  };
  return (
    <section className="m-3 ">
      <h3 className="text-3xl text-center my-3">
        My Bookings : {bookings.length}{" "}
      </h3>
      {bookings.length ? (
        <div className="grid justify-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {bookings.map((booking) => (
            <SingleMyOrder
              key={booking._id}
              handleDeleteBooking={handleDeleteBooking}
              booking={booking}
            ></SingleMyOrder>
          ))}
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </section>
  );
};

export default Dashboard;
