import React, { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user } = useContext(AuthContext);
  console.log("user", user);
  const navigate = useNavigate();

  const handleReview = (data) => {
    console.log("review Data", data);

    const review = {
      userName: data.name,
      userEmail: user.email,
      userDesignation: data.designation,
      rating: data.ratings,
      photo: user.photoURL,
      description: data.description,
    };
    fetch(`http://localhost:5000/users/review/${user.email}`, {
      method: "PUT",
      body: JSON.stringify(review),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.upsertedCount > 0) {
          toast.success("Review Added Successfully");
          navigate("/");
        }
        if (data.modifiedCount > 0) {
          toast.success("Review Modified Successfully");
          navigate("/");
        }
      });
  };
  return (
    <section>
      <h3 className="text-3xl font-medium my-4 text-center">Review</h3>

      <div className="mx-8 mb-5 bg-[--reviewBackground] shadow-lg md:w-1/2 md:mx-auto py-9 px-7 rounded-md">
        <form onSubmit={handleSubmit(handleReview)}>
          {/* name  */}
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
            className="input input-bordered  w-full mb-3"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
          {/* Designation */}
          <input
            {...register("designation", {
              required: "Designation and company name is required",
            })}
            type="text"
            placeholder="Company Name, Designation"
            className="input input-bordered  w-full mb-3"
          />
          {errors.designation && (
            <p className="text-red-600">{errors.designation?.message}</p>
          )}
          {/* Ratings  */}

          <input
            {...register("ratings", {
              required: "Rating is required",
              minLength: {
                value: 1,
                message: "Rating must be between (1-5)",
              },
              pattern: {
                value: /^([1-5](\.[0-9])?)$/,
                message: "Rating must be between (1-5)",
              },
            })}
            type="text"
            placeholder="Ratings (1-5)"
            className="input input-bordered   w-full mb-3"
          />
          {errors.ratings && (
            <p className="text-red-600">{errors.ratings?.message}</p>
          )}
          <br />
          <textarea
            {...register("description", {
              required: "Description is required",

              pattern: {
                value: /^\s*(\S+\s+){0,49}\S+\s*$/,
                message: "Review must be up to 50 words",
              },
            })}
            placeholder="Description (up to 50 words)"
            className="textarea textarea-bordered  textarea-lg  w-full mb-3"
          ></textarea>
          {errors.description && (
            <p className="text-red-600">{errors.description?.message}</p>
          )}
          <input type="submit" className="btn btn-primary " value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Review;
