import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleExploreCar from "./SingleExploreCar";
import Spinner from "../../Components/Spinner";

const Explore = () => {
  const [allCars, setAllCars] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allProducts?page=${page}&size=${size}`)
      .then((res) => {
        const { count, result } = res.data;
        setAllCars(result);
        setCount(count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, size]);
  return (
    <section className="max-w-7xl mx-auto my-5">
      <h3 className="text-2xl font-semibold my-3 ">All available Cars</h3>
      {allCars.length ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allCars.map((car) => (
              <SingleExploreCar car={car} key={car._id}></SingleExploreCar>
            ))}
          </div>
          {/* pagination  */}
          <div className="btn-group my-3 flex justify-center">
            {[...Array(pages).keys()].map((number) => (
              <button
                key={number}
                onClick={() => setPage(number)}
                // className="btn btn-lg mr-2"
                className={
                  page === number
                    ? "btn btn-md mr-2 btn-active"
                    : "btn btn-md mr-2"
                }
              >
                {number + 1}
              </button>
            ))}
            <select
              onChange={(event) => setSize(event.target.value)}
              className="select select-bordered max-w-xs"
            >
              <option value="5">5</option>
              <option value="10" selected>
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </>
      ) : (
        <Spinner></Spinner>
      )}
    </section>
  );
};

export default Explore;
