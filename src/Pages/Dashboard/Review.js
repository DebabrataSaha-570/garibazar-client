import React from "react";

const Review = () => {
  return (
    <section>
      <h3 className="text-3xl font-medium m-3">Review</h3>

      <div className="m-4  shadow-lg w-full md:w-1/2 p-7">
        <form onSubmit="">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered  w-full mb-3"
          />
          <br />
          <input
            type="text"
            placeholder="Company Name, Designation"
            className="input input-bordered  w-full mb-3"
          />
          <br />
          <input
            type="text"
            placeholder="Ratings (1-5)"
            className="input input-bordered   w-full mb-3"
          />
          <br />
          <textarea
            placeholder="Description (up to 50 words)"
            className="textarea textarea-bordered  textarea-lg  w-full mb-3"
          ></textarea>
          <input type="submit" className="btn btn-primary " value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Review;
