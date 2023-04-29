import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SingleHatchbackCar from "./SingleHatchbackCar";
import { Link } from "react-router-dom";
import Spinner from "../../../Components/Spinner";

const HatchbackCars = () => {
  const [hatchbackCars, setHatchbackCars] = useState([]);
  const bodyType = "hatchback";

  useEffect(() => {
    fetch("http://localhost:5000/product/hatchback")
      .then((res) => res.json())
      .then((data) => {
        setHatchbackCars(data);
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
      <h3 className="text-2xl font-semibold mb-2">Hatchback Cars </h3>
      {hatchbackCars.length ? (
        <Slider {...settings}>
          {hatchbackCars.slice(0, 6).map((car) => (
            <div>
              {" "}
              <SingleHatchbackCar
                car={car}
                key={car._id}
              ></SingleHatchbackCar>{" "}
            </div>
          ))}
        </Slider>
      ) : (
        <Spinner></Spinner>
      )}
      <div className="flex justify-end">
        <Link
          to={`/viewAllCars/${bodyType}`}
          className="btn btn-ghost capitalize"
        >
          View all Hatchback Cars
        </Link>
      </div>
    </section>
  );
};

export default HatchbackCars;
