// src/FAQ.js
import React, { useState } from 'react';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('Eligibility');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const tabs = ['Eligibility', 'How To Use?', 'Terms & Conditions'];
  const faqData = {
    Eligibility: [
      {
        question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
        answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.'
      },
      {
        question: 'What is the minimum system configuration required?',
        answer: 'The minimum system configuration required is... (details here)'
      }
    ],
    'How To Use?': [
    ],
    'Terms & Conditions': [
    ]
  };

  return (
    <div className="w-full mx-auto mt-10 p-4  rounded-lg">
  
      <h2 className="mt-16 p-4 lg:p-6 lg:pb-8 relative z-20 text-center text-[21px]/[40px] lg:text-[35px]/[50px] 2xl:text-[40px]/[60px] 3xl:text-[44px]/[65px] font-semibold">Frequently Asked <span className="text-[#1A73E8] font-bold">Questions</span></h2>
      <div className="flex gap-4 lg:w-[981px] xl:w-[1081px] 2xl:w-[1181px] 3xl:w-[1281px] mx-auto">
        <div className="w-1/6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`block w-full py-2 px-4 mb-2 font-semibold text-center rounded-lg z-10  ${activeTab === tab ? 'shadow-custom-medium text-[#1A73E8]' : ' text-[#737373] border-[1.5px] border-[#737373]'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="w-5/6 pl-6">
          {faqData[activeTab].map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                className={`text-left w-full focus:outline-none ${activeQuestion === index? "text-[#1A73E8]": "text-[rgba(0, 0, 0, 0.87)]"}`}
              >
                <h3 className="text-[17px]/[28px] font-semibold">
                  {item.question}
                  <span className="float-right">{activeQuestion === index ? '▲' : '▼'}</span>
                </h3>
              </button>
              {activeQuestion === index && <p className="mt-2 text-gray-700 ml-2">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
