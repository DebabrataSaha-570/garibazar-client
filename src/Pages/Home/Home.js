import React from "react";
import SUVCars from "./SUV/SUVCars";
import SedanCars from "./Sedan/SedanCars";
import HatchbackCars from "./Hatchback/HatchbackCars";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AboutUs></AboutUs>
      <SUVCars></SUVCars>
      <SedanCars></SedanCars>
      <HatchbackCars></HatchbackCars>
    </div>
  );
};

export default Home;
