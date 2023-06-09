import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaMobileAlt,
  FaTruckMonster,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import mastercard from "../../assets/footer_image/visa_masterCard_americanExpress.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="bg-secondary py-6">
      <footer className="footer max-w-7xl mx-auto p-14  text-[--footerText]">
        <div>
          <Link to="/" className="text-3xl font-semibold text-[--footerText]">
            {" "}
            <FaTruckMonster className="inline-block text-5xl text-primary"></FaTruckMonster>{" "}
            Gari Bazar
          </Link>
          <p className="w-[250px] leading-6">
            We always try to stay with our best service.
          </p>

          <p className="flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/debabrata-saha-shuvo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="mr-4 text-[18px] hover:text-primary  transition-all duration-500"></FaFacebookF>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/debabrata-saha-shuvo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="mr-4 text-xl hover:text-primary  transition-all duration-500"></FaLinkedinIn>
            </a>
            <a
              href="https://www.linkedin.com/in/debabrata-saha-shuvo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="mr-4 text-xl hover:text-primary  transition-all duration-500"></FaTwitter>
            </a>
          </p>
        </div>
        <div className="text-[15px]">
          <span className="text-[18px] mb-[15px] mt-[10px] font-bold">
            Categories
          </span>
          <Link
            to="/"
            className="hover:text-primary cursor-pointer transition-all duration-500 "
          >
            SUV
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary cursor-pointer transition-all duration-500 "
          >
            Hatchback
          </Link>
          <Link
            to="/blogs"
            className="hover:text-primary cursor-pointer transition-all duration-500 "
          >
            Sedans
          </Link>
        </div>
        <div className="text-[15px]">
          <span className="text-[18px] mb-[15px] mt-[10px] font-bold">
            Useful Links
          </span>
          <Link
            to="/"
            className="hover:text-primary cursor-pointer transition-all duration-500 "
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary cursor-pointer transition-all duration-500 "
          >
            Contact
          </Link>
          <Link
            to="/blogs"
            className="hover:text-primary cursor-pointer transition-all duration-500 "
          >
            Blogs
          </Link>
          <Link
            to="/explore"
            className="hover:text-primary cursor-pointer transition-all duration-500 "
          >
            Explore
          </Link>
        </div>
        <div>
          <span className="text-[18px] mb-[15px] mt-[10px] font-bold">
            Contact Info
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="inline-block mr-3 text-xl"></FaMapMarkerAlt>{" "}
            Noakhali, Bangladesh
          </span>
          <span className="flex items-center my-2">
            <FaEnvelope className="inline-block mr-3 text-xl"></FaEnvelope>{" "}
            garibazar@gmail.com
          </span>
          <span className="flex items-center">
            <FaMobileAlt className="inline-block mr-3 text-xl"></FaMobileAlt>{" "}
            +880167777777
          </span>
        </div>
      </footer>
      <hr className=" border-t border-[#ffffff1a]" />
      <footer className="footer max-w-7xl mx-auto px-10 py-5  bg-secondary text-[--footerText] ">
        <div className="flex-col md:flex md:flex-row justify-between items-center w-full">
          <p className="text-[14px]">
            © 2023 All Rights Reserved by Debabrata Saha
          </p>
          <div>
            <img className="w-[200px]" src={mastercard} alt="masterCard_img" />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
