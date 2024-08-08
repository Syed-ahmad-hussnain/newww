import React, { useState } from 'react';
import { FaPaperclip, FaChevronDown, FaTimes, FaUserPlus, FaEye } from 'react-icons/fa';

const EmailEditor = () => {
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <input
          type="text"
          placeholder="Subject"
          className="flex-grow px-3 py-2 text-gray-700 border-b focus:outline-none"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <button className="text-gray-600 hover:text-gray-800 ml-2">
          <FaTimes className="w-5 h-5" />
        </button>
      </div>
      
      <div className="mb-4">
        <textarea
          placeholder="Start typing here..."
          className="w-full h-64 px-3 py-2 text-gray-700 border-none resize-none focus:outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaPaperclip className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaUserPlus className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaEye className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Save
          </button>
          <button className="ml-2 p-2 text-gray-600 hover:text-gray-800 focus:outline-none">
            <FaChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailEditor;