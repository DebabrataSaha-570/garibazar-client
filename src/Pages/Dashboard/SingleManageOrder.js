import { format } from "date-fns";
import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";

const SingleManageOrder = ({ booking, handleDelete, handleApprove }) => {
  const { userName, userEmail, status, bookingDate, _id } = booking;
  const { name } = booking.CarInfo;
  return (
    <tr>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>{name}</td>
      <td> {format(new Date(bookingDate), "dd/MM/yyyy")}</td>
      {status === "Pending" && <td className="text-error"> {status} </td>}
      {status === "Approved" && <td className="text-success"> {status} </td>}
      <td className="flex justify-center">
        {status === "Pending" && (
          <button
            onClick={() => handleApprove(_id)}
            className="btn btn-success capitalize mr-2"
          >
            Approve
          </button>
        )}
        {status === "Approved" && (
          <button className="btn btn-success btn-disabled capitalize mr-2">
            Approve
          </button>
        )}
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          <RiDeleteBinFill className="text-xl"></RiDeleteBinFill>
        </button>
      </td>
    </tr>
  );
};

export default SingleManageOrder;
