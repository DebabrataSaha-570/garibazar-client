import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const SingleSedanCar = ({ car }) => {
  const { name, image, _id, price } = car;
  return (
    <div>
      <div className="card card-compact   bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{name}</h2>
          <p className="flex items-center text-xl">
            <TbCurrencyTaka className="inline-block"></TbCurrencyTaka> {price}*
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`/productDetail/${_id}`}
              className="btn btn-primary h-[10px] capitalize min-h-[2.25rem]"
            >
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSedanCar;
