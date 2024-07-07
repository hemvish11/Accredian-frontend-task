import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFormData, setIsFailure, setIsSuccessfull, setLoading, submitReferral, updateFormData } from '../../../features/referralSlice';
import { setIsReferralBoxOpened } from '../../../features/referralBoxSlice';

const ReferralModal = () => {

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.referral.formData);
  const loading = useSelector((state) => state.referral.loading);
  const isReferralBoxOpened = useSelector((state) => state.box.isReferralBoxOpened);
  
  const updateData = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(setIsReferralBoxOpened(false));

    dispatch(submitReferral(formData))
      .unwrap()
      .then(() => {
        dispatch(setIsSuccessfull(true));
        dispatch(resetFormData());
      })
      .catch(() => {
        dispatch(setIsFailure(true));
      })
      .finally(() => {
        dispatch(setLoading(false));
      })
  };

  if (!isReferralBoxOpened) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              name='refereeName'
              value={formData.refereeName}
              onChange={(e) => updateData(e)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={formData.refereeEmail}
              name='refereeEmail'
              onChange={(e) => updateData(e)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Phone Number</label>
            <input
              name='refereePhoneNumber'
              type="number"
              className="w-full p-2 border rounded"
              value={formData.refereePhoneNumber}
              onChange={(e) => updateData(e)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Friend's Name</label>
            <input
              name='friendName'
              type="text"
              className="w-full p-2 border rounded"
              value={formData.friendName}
              onChange={(e) => updateData(e)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Email</label>
            <input
              name='friendEmail'
              type="email"
              className="w-full p-2 border rounded"
              value={formData.friendEmail}
              onChange={(e) => updateData(e)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Phone Number</label>
            <input
              name='friendPhoneNumber'
              type="number"
              className="w-full p-2 border rounded"
              value={formData.friendPhoneNumber}
              onChange={(e) => updateData(e)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={()=> dispatch(setIsReferralBoxOpened(false))}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ReferralModal;
