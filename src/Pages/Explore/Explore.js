import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleExploreCar from "./SingleExploreCar";
import { RotatingLines } from "react-loader-spinner";
import Spinner from "../../Components/Spinner";

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
        <Spinner></Spinner>
      )}
    </section>
  );
};

export default Explore;
