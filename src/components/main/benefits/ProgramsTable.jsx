import React from 'react';
import Sidebar from './SideBar';
import hat from "../../../assets/Hat.svg";
import ReferBtn from '../refer/button/ReferBtn';

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
      <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center text-[18px]/[24px]">
        <Sidebar />
        <div className="w-full md:w-3/4 overflow-x-auto rounded-2xl shadow-xl">
          <table className="min-w-full bg-[#F8FBFF] shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-4 px-5 bg-[#AFCEF7] text-[#1350A0] font-bold border-b text-left">Programs</th>
                <th className="py-4 px-5 bg-[#AFCEF7] text-[#1350A0] font-bold border-b text-center border-l-2 border-r-2">Referrer Bonus</th>
                <th className="py-4 px-5 bg-[#AFCEF7] text-[#1350A0] font-bold border-b text-center">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr key={index} >
                  <td className="flex items-center gap-4 ml-4 py-3 px-4 text-[#3C4852] w-[80%]">
                    <img src={hat} alt='hat icon' />
                    <span>{program.name}</span>
                  </td>
                  <td className="py-3 px-4 text-[#3C4852] text-center border-l-2 border-r-2">{program.referrerBonus}</td>
                  <td className="py-3 px-4 text-[#3C4852] text-center">{program.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex items-center justify-center my-16'>
        <ReferBtn />
      </div>
    </div>
  );
};

export default ProgramsTable;
