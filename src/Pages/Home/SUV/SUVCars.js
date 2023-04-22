import React, { useEffect, useState } from "react";
import SingleSUVCar from "./SingleSUVCar";
import { RotatingLines } from "react-loader-spinner";
import Slider from "react-slick";

const SUVCars = () => {
  const [suvCars, setSUVcars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product/hatchback")
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
    <section className="max-w-7xl mx-auto my-5 p-8">
      <h3 className="text-2xl font-semibold">SUV Cars </h3>
      {suvCars.length ? (
        <Slider {...settings}>
          {suvCars.slice(0, 6).map((car) => (
            <div>
              {" "}
              <SingleSUVCar car={car}></SingleSUVCar>{" "}
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
      <div className="flex justify-end">
        <button className="btn btn-ghost capitalize">View all SUV Cars</button>
      </div>
    </section>
  );
};

export default SUVCars;
