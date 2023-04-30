import axios from "axios";
import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ product, user }) => {
  const { name } = product;
  const navigate = useNavigate();

  const userNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const creditCardRef = useRef();
  const date = new Date();

  const handleBookNow = (e) => {
    e.preventDefault();
    const userNameValue = userNameRef.current.value;
    const userEmailValue = emailRef.current.value;
    const phoneValue = phoneRef.current.value;
    const creditCardValue = creditCardRef.current.value;
    const bookingDate = date;

    const bookingData = {
      CarInfo: product,
      userName: userNameValue,
      userEmail: userEmailValue,
      userPhone: phoneValue,
      creditCard: creditCardValue,
      bookingDate: bookingDate,
      status: "Pending",
    };
    //Axios post
    axios
      .post("https://gari-bazar-server.onrender.com/addBookNow", bookingData)
      .then((res) => {
        if (res.data?.insertedId) {
          toast.success("Booking added successfully!");
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <>
      {/* book now modal  */}
      <input type="checkbox" id="bookNowModalBtn" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookNowModalBtn"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBookNow} className="p-3 space-y-2">
            <input
              required
              ref={userNameRef}
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName || ""}
              className="input input-bordered w-full "
            />
            <input
              required
              ref={emailRef}
              type="email"
              placeholder="Your Email"
              defaultValue={user?.email || ""}
              className="input input-bordered w-full "
            />
            <input
              required
              ref={phoneRef}
              type="number"
              placeholder="Your Phone Number"
              className="input input-bordered w-full "
            />
            <input
              required
              ref={addressRef}
              type="text"
              placeholder="Your Address"
              className="input input-bordered w-full "
            />
            <input
              required
              ref={creditCardRef}
              type="text"
              placeholder="Your Credit Card Number"
              className="input input-bordered w-full "
            />
            <input type="submit" value="Submit" className="btn  btn-block " />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
