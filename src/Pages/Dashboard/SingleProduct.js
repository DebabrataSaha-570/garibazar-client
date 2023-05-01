import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const SingleProduct = ({ car, handleDeleteProduct }) => {
  const { name, image, _id, price } = car;
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
        <div className="card-actions mt-3 flex justify-between">
          <Link
            to={`/productDetail/${_id}`}
            className="btn btn-primary btn-sm capitalize "
          >
            Show Details
          </Link>
          <button
            onClick={() => handleDeleteProduct(_id)}
            className="btn btn-error btn-sm"
          >
            <RiDeleteBinFill></RiDeleteBinFill>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
