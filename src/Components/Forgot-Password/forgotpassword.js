import React, { useState, useEffect } from 'react';
import Closeicon from '../../assets/Icons/icon-close.png';
import logogradient from '../../assets/Images/Brand-Logo-gradient.png';

const PasswordResetPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage('');

    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFeedbackMessage('Password reset link sent successfully!');
      // You would typically send a request to your backend here
    } catch (error) {
      setFeedbackMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-3xl p-8 w-[500px] max-w-[95vw] relative shadow-2xl transform transition-all duration-300 ease-out scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 transition-transform duration-200 hover:scale-110 focus:outline-none"
          aria-label="Close"
        >
          <img src={Closeicon} className='h-[20px]' alt="Close" />
        </button>
        
        <div className="flex justify-center mb-8">
          <img src={logogradient} alt="Logo" className="w-24 h-24 object-contain" />
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Reset your password</h2>
        
        <p className="text-gray-600 text-center mb-8 max-w-md mx-auto">
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <button
            type="submit"
            className={`w-full bg-indigo-600 text-white rounded-full py-3 px-4 font-semibold text-lg transition duration-300 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700 active:bg-indigo-800'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Continue'}
          </button>
        </form>
        
        {feedbackMessage && (
          <p className={`mt-4 text-center ${feedbackMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {feedbackMessage}
          </p>
        )}
        
        <p className="mt-6 text-center text-sm text-gray-500">
          Remember your password? <button onClick={onClose} className="text-indigo-600 hover:underline focus:outline-none">Back to login</button>
        </p>
      </div>
    </div>
  );
};

export default PasswordResetPopup;