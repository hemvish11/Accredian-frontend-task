import React, { useState } from 'react';

const ReferralModal = ({ isOpen, onClose, setIsSuccessfull, setIsFailure, setLoading }) => {
  const initialData = {
    refereeName: "",
    refereeEmail: "",
    refereePhoneNumber: "",
    friendName: "",
    friendEmail: "",
    friendPhoneNumber: "",
  }

  const [formData, setFormData] = useState(initialData);

  const updateFormData = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    setLoading(true);
    onClose();

    try {
      // const response = await fetch("http://localhost:3000/api/addReferralDetails", {
        const response = await fetch("https://accredian-backend-task-380t.onrender.com/api/addReferralDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const jsonData = await response.json();
        console.log("Data posted successfully", jsonData);
        if (jsonData.err) {
          console.log("Error posting the data", error);
          setIsFailure(true);
        }
        setIsSuccessfull(true);
      }
    } catch (error) {
      console.log("Error posting the data", error);
      setIsFailure(true);
    }
    // setFormData(initialData);
    setLoading(false);
  };

  if (!isOpen) return null;

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
              onChange={(e) => updateFormData(e)}
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
              onChange={(e) => updateFormData(e)}
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
              onChange={(e) => updateFormData(e)}
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
              onChange={(e) => updateFormData(e)}
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
              onChange={(e) => updateFormData(e)}
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
              onChange={(e) => updateFormData(e)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
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
