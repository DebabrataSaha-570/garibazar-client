import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="3"
        animationDuration="1.75"
        width="76"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
