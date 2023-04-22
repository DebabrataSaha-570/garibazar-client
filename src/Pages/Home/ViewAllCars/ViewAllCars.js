import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewSingleCar from "./ViewSingleCar";
import { RotatingLines } from "react-loader-spinner";

const ViewAllCars = () => {
  const { bodyType } = useParams();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${bodyType}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  return (
    <section className="max-w-7xl mx-auto ">
      <h3 className="text-2xl font-semibold my-3">
        All <span className="uppercase">{bodyType}</span> Cars{" "}
      </h3>
      {cars.length ? (
        <div className="px-3 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {cars.map((car) => (
            <ViewSingleCar car={car} key={car._id}></ViewSingleCar>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="1.75"
            width="76"
            visible={true}
          />
        </div>
      )}
    </section>
  );
};

export default ViewAllCars;
