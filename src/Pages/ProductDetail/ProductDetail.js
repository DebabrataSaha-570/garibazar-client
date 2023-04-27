import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from "axios";
import { TbCurrencyTaka } from "react-icons/tb";
import BookingModal from "./BookingModal";

const ProductDetail = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/productDetail/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const {
    name,
    image,
    price,
    description,
    mileage,
    maxPower,
    seatingCapacity,
    bootSpace,
    fuelType,
    serviceCost,
    cylinder,
    transmissionType,
    bodyType,
    engine,
  } = product;
  return (
    <section className="max-w-7xl mx-auto my-5">
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* left side  */}
        <div>
          <img
            className="object-cover w-full  rounded-lg"
            src={image}
            alt={name}
          />

          <h3 className="text-3xl font-semibold my-3 ">{name}</h3>
          <p className="flex items-center text-2xl">
            <TbCurrencyTaka className="inline-block"></TbCurrencyTaka> {price}*
          </p>
          <p className="my-3">{description}</p>
        </div>
        {/* right side  */}
        <div>
          <h3 className="text-2xl m-2">Specification of {name}</h3>
          <div className="px-6 pb-5">
            <table className="table w-full">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>ARAI Mileage</td>
                  <td>{mileage}Kmpl</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td>Engine Displacement (cc)</td>
                  <td>{engine}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td>Max Power (bhp)</td>
                  <td>{maxPower} bhp</td>
                </tr>
                <tr>
                  <td>Seating Capacity</td>
                  <td>{seatingCapacity}</td>
                </tr>
                <tr>
                  <td>Boot Space (Litres)</td>
                  <td>{bootSpace}</td>
                </tr>
                <tr>
                  <td>Service Cost (Avg. of 5 years)</td>
                  <td>BDT.{serviceCost}</td>
                </tr>
                <tr>
                  <td>Fuel Type</td>
                  <td>{fuelType}</td>
                </tr>
                <tr>
                  <td>No. of cylinder</td>
                  <td>{cylinder}</td>
                </tr>
                <tr>
                  <td>Transmission Type</td>
                  <td>{transmissionType}</td>
                </tr>
                <tr>
                  <td>Body Type</td>
                  <td>{bodyType}</td>
                </tr>
              </tbody>
            </table>
            <div className="my-2">
              {/* The button to open modal */}
              <label
                htmlFor="bookNowModalBtn"
                className="btn btn-primary btn-block"
              >
                Book Now
              </label>
              <BookingModal product={product} user={user}></BookingModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
