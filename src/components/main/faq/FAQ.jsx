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
      // Add questions and answers for 'How To Use?' tab
    ],
    'Terms & Conditions': [
      // Add questions and answers for 'Terms & Conditions' tab
    ]
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-4 border border-blue-400 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>
      <div className="flex">
        <div className="w-1/4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`block w-full py-2 px-4 mb-2 text-left rounded-lg ${activeTab === tab ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-700'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="w-3/4 pl-6">
          {faqData[activeTab].map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                className="text-left w-full focus:outline-none text-blue-600"
              >
                <h3 className="text-lg">
                  {item.question}
                  <span className="float-right">{activeQuestion === index ? '▲' : '▼'}</span>
                </h3>
              </button>
              {activeQuestion === index && <p className="mt-2 text-gray-700">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
