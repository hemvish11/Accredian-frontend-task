import React from 'react';

const FailureModal = ({ isOpen, setIsFailure }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Oops!</h2>
        <p className="mb-4">Something went wrong with your referral. Please try again.</p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={(e)=>setIsFailure(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FailureModal;