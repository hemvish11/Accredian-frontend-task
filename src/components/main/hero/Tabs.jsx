import React from 'react';

const Tabs = () => {
  return (
    <div className="text-[18px]/[14px] lg:text-[18px]/[16px] 2xl:text-[20px]/[18px] 3xl:text-[24px]/[22px] flex justify-between px-16 bg-blue-50 rounded-full p-2 w-[397px] lg:w-[497px] 2xl:w-[597px] 3xl:w-[797px] h-[43px] 2xl:h-[53px] 3xl:h-[63px] mt-8 mb-4 2xl:mb-8 3xl:mb-12 2xl:mt-12 3xl:mt-16 z-10 mx-auto">
      <button className="text-blue-600 font-semibold focus:outline-none focus:text-blue-700">
        Refer
      </button>
      <button className="text-[#4B4B4B] font-semibold focus:outline-none focus:text-blue-700">
        Benefits
      </button>
      <button className="text-[#4B4B4B] font-semibold focus:outline-none focus:text-blue-700">
        FAQs
      </button>
      <button className="text-[#4B4B4B] font-semibold focus:outline-none focus:text-blue-700">
        Support
      </button>
    </div>
  );
};

export default Tabs;
