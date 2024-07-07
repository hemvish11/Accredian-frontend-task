import React from 'react';
import Sidebar from './SideBar';

const programs = [
  {
    name: 'Professional Certificate Program in Product Management',
    referrerBonus: '₹ 7,000',
    refereeBonus: '₹ 9,000',
  },
  {
    name: 'PG Certificate Program in Strategic Product Management',
    referrerBonus: '₹ 9,000',
    refereeBonus: '₹ 11,000',
  },
  {
    name: 'Executive Program in Data Driven Product Management',
    referrerBonus: '₹ 10,000',
    refereeBonus: '₹ 10,000',
  },
  {
    name: 'Executive Program in Product Management and Digital Transformation',
    referrerBonus: '₹ 10,000',
    refereeBonus: '₹ 10,000',
  },
  {
    name: 'Executive Program in Product Management',
    referrerBonus: '₹ 10,000',
    refereeBonus: '₹ 10,000',
  },
  {
    name: 'Advanced Certification in Product Management',
    referrerBonus: '₹ 10,000',
    refereeBonus: '₹ 10,000',
  },
  {
    name: 'Executive Program in Product Management and Project Management',
    referrerBonus: '₹ 10,000',
    refereeBonus: '₹ 10,000',
  },
];

const ProgramsTable = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* <div className="bg-blue-100 p-4 rounded-lg w-full md:w-1/4">
          <h3 className="font-bold text-lg mb-4">ALL PROGRAMS</h3>
          <ul>
            <li className="mb-2 text-blue-600 font-semibold">PRODUCT MANAGEMENT</li>
            <li className="mb-2">STRATEGY & LEADERSHIP</li>
            <li className="mb-2">BUSINESS MANAGEMENT</li>
            <li className="mb-2">FINTECH</li>
            <li className="mb-2">SENIOR MANAGEMENT</li>
            <li className="mb-2">DATA SCIENCE</li>
            <li className="mb-2">DIGITAL TRANSFORMATION</li>
            <li className="mb-2">BUSINESS ANALYTICS</li>
          </ul>
        </div> */}
        <Sidebar />
        <div className="w-full md:w-3/4 overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 bg-blue-100 border-b text-left">Programs</th>
                <th className="py-3 px-4 bg-blue-100 border-b text-left">Referrer Bonus</th>
                <th className="py-3 px-4 bg-blue-100 border-b text-left">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border-b">{program.name}</td>
                  <td className="py-3 px-4 border-b">{program.referrerBonus}</td>
                  <td className="py-3 px-4 border-b">{program.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProgramsTable;
