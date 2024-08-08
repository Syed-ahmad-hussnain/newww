import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center p-1 rounded-md bg-[#F2F0FF] cursor-pointer"
         onClick={() => setEnabled(!enabled)}
    >
      <div
        className={`flex items-center justify-center w-20 h-10 rounded-md transition-all duration-300 ${
          enabled ? 'bg-transparent text-gray-500' : 'bg-[#9CA3AF] text-white'
        }`}
      >
        Disable
      </div>
      <div
        className={`flex items-center justify-center w-20 h-10 rounded-md transition-all duration-300 ${
          enabled ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-500'
        } ml-1`}
      >
        Enable
      </div>
    </div>
  );
};

export default ToggleSwitch;
