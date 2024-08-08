import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

const DoubleArrow = ({ className }) => (
  <div className={`flex ${className}`}>
    <ChevronRight size={24} />
    <ChevronRight size={24} className="-ml-4" />
  </div>
);

DoubleArrow.propTypes = {
  className: PropTypes.string,
};

const Stepper = ({ steps, currentStep }) => (
  <div className="flex items-center space-x-4">
    {steps.map((step, index) => (
      <React.Fragment key={step.number}>
        <div
          className={`flex items-center rounded-full ${
            index === currentStep
              ? "bg-custom-blue text-white"
              : "bg-gray-100 text-gray-500"
          } px-6 py-3 text-lg`}
          aria-current={index === currentStep ? "step" : undefined}
        >
          <span className="font-bold mr-3 text-xl">{step.number}</span>
          <span className={index === currentStep ? "font-semibold" : ""}>
            {step.name}
          </span>
        </div>
        {index < steps.length - 1 && (
          <DoubleArrow className="text-gray-400" />
        )}
      </React.Fragment>
    ))}
  </div>
);

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Stepper;