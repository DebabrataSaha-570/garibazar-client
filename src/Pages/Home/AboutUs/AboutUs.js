import React from "react";
import image1 from "../../../assets/img-5.jpg";
const AboutUs = () => {
  return (
    <div className="hero py-5 md:my-0 min-h-[650px] bg-base-200 ">
      <div className="hero-content flex-col justify-between items-center lg:flex-row-reverse ">
        <img
          src={image1}
          className=" md:max-w-lg object-cover rounded-lg shadow-2xl md:basis-1/2"
          alt="About_image"
        />
        <div className="md:basis-1/2">
          <h1 className="text-4xl md:text-5xl font-bold">About Our Company</h1>
          <p className="py-5 ">
            <span className="text-[1.25rem]">
              We always try our best to give you our best service. We try to
              solve our customers' problems with all kinds of services.
            </span>
            <br />
            <br />
            Our team consists of skilled professionals who are dedicated to
            providing efficient and reliable services. We take pride in our work
            and always strive to provide the best possible outcome for our
            customers. We offer a wide range of services to meet our customers'
            needs, including car buying, selling, and trading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
