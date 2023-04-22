import React from "react";
import SUVCars from "./SUV/SUVCars";
import SedanCars from "./Sedan/SedanCars";
import HatchbackCars from "./Hatchback/HatchbackCars";

const Home = () => {
  return (
    <div>
      <SUVCars></SUVCars>
      <SedanCars></SedanCars>
      <HatchbackCars></HatchbackCars>
    </div>
  );
};

export default Home;
