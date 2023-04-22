import React from "react";
import SUVCars from "./SUV/SUVCars";
import SedanCars from "./Sedan/SedanCars";

const Home = () => {
  return (
    <div>
      <SUVCars></SUVCars>
      <SedanCars></SedanCars>
    </div>
  );
};

export default Home;
