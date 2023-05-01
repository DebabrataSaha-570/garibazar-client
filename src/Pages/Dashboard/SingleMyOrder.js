import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";

const SingleMyOrder = ({ booking, handleDeleteBooking }) => {
  const { name, image, price } = booking.CarInfo;
  const { status, _id } = booking;

  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl my-3">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="flex items-center text-xl">
          <TbCurrencyTaka className="inline-block"></TbCurrencyTaka> {price}*
        </p>
        <div className="card-actions flex justify-between">
          {status === "Pending" && (
            <button className="btn btn-error btn-sm">{status}</button>
          )}
          {status === "Approved" && (
            <button className="btn btn-success capitalize btn-sm">
              {status}
            </button>
          )}
          <button
            onClick={() => handleDeleteBooking(_id)}
            className="btn btn-error btn-sm"
          >
            <RiDeleteBinFill></RiDeleteBinFill>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMyOrder;
