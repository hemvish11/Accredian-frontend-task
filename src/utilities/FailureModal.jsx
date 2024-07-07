import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsFailure } from '../features/referralSlice';

const FailureModal = () => {
  const isFailure = useSelector((state)=> state.referral.isFailure);
  if (!isFailure) return null;

  const dispatch=useDispatch();
  
  const handleClose=()=>{
    dispatch(setIsFailure(false));
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-500">Oops!</h2>
        <p className="mb-4">Something went wrong with your referral. Please try again.</p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={()=>handleClose()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FailureModal;