import React, { useEffect, useState } from "react";
import SingleSUVCar from "./SingleSUVCar";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Spinner from "../../../Components/Spinner";

const SUVCars = () => {
  const [suvCars, setSUVcars] = useState([]);
  const bodyType = "suv";

  useEffect(() => {
    fetch("https://gari-bazar-server.onrender.com/product/suv")
      .then((res) => res.json())
      .then((data) => {
        setSUVcars(data);
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
    <section className="max-w-7xl mx-auto my-5 px-8 py-3">
      <h3 className="text-2xl font-semibold mb-2">SUV Cars </h3>
      {suvCars.length ? (
        <Slider {...settings}>
          {suvCars.slice(0, 6).map((car) => (
            <div>
              {" "}
              <SingleSUVCar car={car} key={car._id}></SingleSUVCar>{" "}
            </div>
          ))}
        </Slider>
      ) : (
        <Spinner></Spinner>
      )}
      <Link to={`/viewAllCars/${bodyType}`} className="flex justify-end">
        <button className="btn btn-ghost capitalize">View all SUV Cars</button>
      </Link>
    </section>
  );
};

export default SUVCars;
