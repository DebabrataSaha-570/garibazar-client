import React from "react";
import background from "../../../assets/img-2.jpg";
import { Link } from "react-router-dom";
const TopBanner = () => {
  return (
    <div
      className="hero min-h-[650px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay bg-opacity-30 "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" w-[85%] md:w-[65%]">
          <h1 className="mb-5 text-6xl md:text-7xl text-white font-bold">
            Discover the perfect ride for you.
          </h1>

          <Link to="/dashboard" className="btn btn-lg  btn-primary ">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
