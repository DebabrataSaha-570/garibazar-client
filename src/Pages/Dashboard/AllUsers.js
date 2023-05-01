import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch("https://gari-bazar-server.onrender.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllUsers(data);
      });
  }, []);

  const handleMakeAdmin = (id) => {
    fetch(`https://gari-bazar-server.onrender.com/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Admin created successfully");
          fetch("https://gari-bazar-server.onrender.com/users")
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              setAllUsers(data);
            });
        }
      });
  };
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure, you want to delete this?");
    if (confirm) {
      fetch(`https://gari-bazar-server.onrender.com/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("User Deleted Successfully");
            const newUsers = allUsers.filter((user) => user._id !== id);
            setAllUsers(newUsers);
          }
        });
    }
    // if (confirm) {
    //   axios
    //     .delete(`https://gari-bazar-server.onrender.com/deleteBooking/${id}`)
    //     .then((res) => {
    //       console.log(res.data);
    //       if (res.data.deletedCount) {
    //         toast.success("Booking Deleted Successfully");
    //         const newBookings = allBookings.filter(
    //           (booking) => booking._id !== id
    //         );

    //         setAllBookings(newBookings);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       toast.error("Something went wrong. Please try again later.");
    //     });
    // }
  };
  return (
    <section>
      <h3 className="text-3xl text-center my-3">
        All Users : {allUsers.length}
      </h3>
      <div>
        <div className="overflow-x-auto p-3">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email ID</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => (
                <SingleUser
                  key={user._id}
                  index={index}
                  user={user}
                  handleMakeAdmin={handleMakeAdmin}
                  handleDelete={handleDelete}
                ></SingleUser>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
