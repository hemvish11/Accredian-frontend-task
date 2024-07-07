import React from 'react';
import RightWhite from "../../../assets/Arrows/rightWhite/RightWhite.svg"
import RightBlack from "../../../assets/Arrows/RightBlack.svg"
import SideBarBtn from './SideBarBtn';

const Sidebar = () => {
  const titles = ["PRODUCT MANAGEMENT", "STRATEGY & LEADERSHIP", "BUSINESS MANAGEMENT", "FINTECH", "SENIOR MANAGEMENT", "DATA SCIENCE", "DIGITAL TRANSFORMATION", "BUSINESS ANALYTICS"];
  return (
    <div className="w-[280px] bg-white shadow-lg rounded-2xl  text-[16px]/[27px] font-semibold pb-4">
      <button className="flex items-center justify-between rounded-t-2xl w-full py-4 px-6 text-white bg-[#1A73E8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
        <span>ALL PROGRAMS</span>
        <img src={RightWhite} alt="right arrow white" />
      </button>

      <nav className="mt-2">
        {titles.map((title, index) => {
          if (index == titles.length-1) {
            return <a href="#" id={title} className="flex gap-2 items-center justify-between py-3 px-6 text-gray-700 hover:bg-gray-100">
              <span>{title}</span>
              <img src={RightBlack} alt="RightBlack" />
            </a>
          }
          return <div id={title}>
            <SideBarBtn title={title} />
          </div>;
        })}
      </nav>

    </div>
  );
};

export default Sidebar;
