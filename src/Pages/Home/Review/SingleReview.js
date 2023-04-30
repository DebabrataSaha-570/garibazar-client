import React from "react";
import Star from "./Star";
const SingleReview = ({ review }) => {
  const { userName, userDesignation, rating, description, photo } =
    review.review;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl py-3">
      <div className="avatar ">
        <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
          {photo ? (
            <img src={photo} alt="user_image" />
          ) : (
            <img
              src="https://img.icons8.com/cotton/64/null/gender-neutral-user--v1.png"
              alt="user_image"
            />
          )}
        </div>
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{userName}</h2>
        <h3 className="text-xl ">{userDesignation}</h3>
        <small className="mb-3">
          <Star stars={rating}></Star>
        </small>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleReview;
