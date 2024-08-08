import React from "react";

const NumberedCheckbox = ({ isChecked, onChange, number }) => {
  return (
    <div
      className={`w-6 h-6 flex items-center justify-center border rounded-full cursor-pointer ${
        isChecked
          ? "bg-custom-gradient text-white border-transparent"
          : "bg-Black-200 text-checkbox border-gray-300"
      }`}
      onClick={onChange}
    >
      <span className="text-xs font-medium">{number}</span>
    </div>
  );
};

export default NumberedCheckbox;
