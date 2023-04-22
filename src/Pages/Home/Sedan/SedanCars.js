import React, { useEffect, useState } from "react";
import SingleSedanCar from "./SingleSedanCar";
import { RotatingLines } from "react-loader-spinner";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SedanCars = () => {
  const [sedanCars, setSedanCars] = useState([]);
  const bodyType = "sedan";

  useEffect(() => {
    fetch("http://localhost:5000/product/sedan")
      .then((res) => res.json())
      .then((data) => {
        setSedanCars(data);
      });
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#202325",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#202325",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          //   infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          //   initialSlide: 2,
          //   infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //   infinite: true,
          //   dots: true,
        },
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto mb-5 px-8 py-3">
      <h3 className="text-2xl font-semibold mb-2">Sedan Cars </h3>
      {sedanCars.length ? (
        <Slider {...settings}>
          {sedanCars.slice(0, 6).map((car) => (
            <div>
              {" "}
              <SingleSedanCar car={car}></SingleSedanCar>{" "}
            </div>
          ))}
        </Slider>
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
      <Link to={`/viewAllCars/${bodyType}`} className="flex justify-end">
        <button className="btn btn-ghost capitalize">
          View all Sedan Cars
        </button>
      </Link>
    </section>
  );
};

export default SedanCars;
