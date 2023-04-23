import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const SingleExploreCar = ({ car }) => {
  const { name, image, price } = car;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="flex items-center text-xl">
          <TbCurrencyTaka className="inline-block"></TbCurrencyTaka> {price}*
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary h-[10px] capitalize ">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleExploreCar;
