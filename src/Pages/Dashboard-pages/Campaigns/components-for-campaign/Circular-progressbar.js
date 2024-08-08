import React from "react";

const CircularProgressBar = ({
  percentage,
  size = 48,
  strokeWidth = 4,
  backgroundColor = "#E5E7EB",
  foregroundColor = "#3B82F6",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (percentage * circumference) / 100;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={foregroundColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - dash}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
        />
      </svg>
      <span
        className="absolute text-sm font-medium"
        style={{
          background: "red",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {percentage}%
      </span>
    </div>
  );
};

export default CircularProgressBar;
