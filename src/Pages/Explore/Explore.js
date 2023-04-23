import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleExploreCar from "./SingleExploreCar";
import { RotatingLines } from "react-loader-spinner";

const Explore = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/allProducts")
      .then((res) => {
        setAllCars(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="max-w-7xl mx-auto my-5">
      <h3 className="text-2xl font-semibold my-3 ">All available Cars</h3>
      {allCars.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allCars.map((car) => (
            <SingleExploreCar car={car} key={car._id}></SingleExploreCar>
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

export default Explore;
