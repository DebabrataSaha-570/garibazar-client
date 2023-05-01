import React from "react";

const SingleUser = ({ user, index, handleMakeAdmin, handleDelete }) => {
  const { name, email, _id } = user;
  console.log("user", user);

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      {user.role === "admin" ? (
        <td>
          <button className="btn btn-success btn-disabled btn-xs">
            Make Admin
          </button>
        </td>
      ) : (
        <td>
          <button
            onClick={() => {
              handleMakeAdmin(_id);
            }}
            className="btn btn-success btn-xs"
          >
            Make Admin
          </button>
        </td>
      )}
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error btn-xs"
        >
          Delete{" "}
        </button>
      </td>
    </tr>
  );
};

export default SingleUser;
