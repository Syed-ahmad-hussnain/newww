import React from 'react';
import { Check } from 'lucide-react';

const CustomCheckbox = ({ checked, onChange, label }) => (
  <label className="flex items-center">
    <div className="relative">
      <input 
        type="checkbox" 
        className="sr-only" 
        checked={checked}
        onChange={onChange}
      />
      <div 
        className={`w-6 h-6 border-2 rounded-full transition-colors duration-200 ease-in-out ${
          checked 
            ? 'bg-blue-500 border-blue-500' 
            : 'bg-[#F3F4F6] border-gray-300'
        }`}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center transition-colors duration-200 ease-in-out">
        <Check size={16} color={checked ? 'white' : '#9CA3AF'} />
      </div>
    </div>
    <span className="ml-2">{label}</span>
  </label>
);

export default CustomCheckbox;
