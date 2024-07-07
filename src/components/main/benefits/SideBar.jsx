// src/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg">
      <button className="w-full py-4 px-6 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
        ALL PROGRAMS
      </button>
      <nav className="mt-2">
        <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-gray-100">
          PRODUCT MANAGEMENT
        </a>
        <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-gray-100">
          STRATEGY & LEADERSHIP
        </a>
        <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-gray-100">
          BUSINESS MANAGEMENT
        </a>
        <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-gray-100">
          FINTECH
        </a>
        <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-gray-100">
          SENIOR MANAGEMENT
        </a>
        <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-gray-100">
          DATA SCIENCE
        </a>
        <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-gray-100">
          DIGITAL TRANSFORMATION
        </a>
        <a href="#" className="block py-3 px-6 text-gray-700 hover:bg-gray-100">
          BUSINESS ANALYTICS
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
