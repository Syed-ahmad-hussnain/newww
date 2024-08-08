import React from 'react';
import { X } from 'lucide-react';
import Launch from '../../assets/Images/img-campaign-launch.png';

const LaunchConfirmationPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6  w-[600px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="mb-4">
          <img
            src={Launch}
            alt="Rocket launch illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">
          🎉 Congratulations! 🎉
        </h2>
        <p className="text-center text-gray-600">
          Your campaign has launched successfully!
        </p>
      </div>
    </div>
  );
};

export default LaunchConfirmationPopup;