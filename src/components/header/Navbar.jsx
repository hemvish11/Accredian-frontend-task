// src/Navbar.js
import React from 'react';
import websiteLogo from "../../assets/accredianLogo.svg";
import downArrow from "../../assets/Arrows/Down.png";
const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm p-4 flex items-center justify-between fixed z-30 -mt-[119px]">
      <div className="flex items-center ml-2 lg:ml-[30px] xl:ml-[40px] 2xl:ml-[50px] 3xl:ml-[100px] gap-4">
        <img src={websiteLogo} alt="Accredian Logo" className="h-8 mr-3" /> {/* Replace with your logo URL */}
        <button className="flex items-center justify-center gap-1 py-2 px-4 bg-[#1A73E8] text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          <span>Courses</span>
          <img src={downArrow} alt="Down arrow"/>
        </button>
      </div>
      <div className="hidden lg:flex items-center space-x-6 mr-2 lg:mr-[30px] xl:mr-[40px] 2xl:mr-[50px] 3xl:mr-[100px]">
        <a href="#" className="text-[#1A202C] text-[15px]/[24px] hover:text-[#1A73E8]">Refer & Earn</a>
        <a href="#" className="text-[#1A202C] text-[15px]/[24px] hover:text-[#1A73E8]">Resources</a>
        <a href="#" className="text-[#1A202C] text-[15px]/[24px] hover:text-[#1A73E8]">About Us</a>
        <button className="py-2 px-4 bg-gray-200 text-[#1A202C] rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
          Login
        </button>
        <button className="py-2 px-4 bg-[#1A73E8] text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Try for free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
