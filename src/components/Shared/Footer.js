import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4 bg-black text-white">
      <Link to="https://moobtech.com/">
        <img className="w-12 h-12" src={logo} alt="" />
      </Link>
      <span>Copyright © 2023</span>
      <span className="text-red-500 font-black">Moob Technologies</span>
    </div>
  );
};

export default Footer;
