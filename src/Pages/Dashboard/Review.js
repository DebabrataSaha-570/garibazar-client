import React from "react";

const Review = () => {
  return (
    <section>
      <h3 className="text-3xl font-medium my-4 text-center">Review</h3>

      <div className="mx-8 mb-5 bg-[--reviewBackground] shadow-lg md:w-1/2 md:mx-auto py-9 px-7 rounded-md">
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
