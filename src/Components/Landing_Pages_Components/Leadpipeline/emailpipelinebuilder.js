import React from "react";
import checkIcon from "../../../assets/Icons/icon-check-box.png"; // Adjust the path as needed
import importedImage from "../../../assets/Images/image-temporary.jpg"; // Update this path to the location of your image

const EmailPipelineBuilder = () => {
  return (
    <div className="w-full mx-auto p-8 min-h-[30vh] bg-white rounded-lg overflow-auto">
      <h1 className="text-[40px] font-bold text-center mb-4">
      Reach your prospects wherever they are 
        <br />
       with outreach across <span className="text-purple-600">multiple channels</span> 
      </h1>
      <br />
      <br />
      <br />
      <div className="flex flex-col md:flex-row items-start justify-center">
        <div className="w-full md:w-1/2 relative left-[80px] top-[9px]">
          <div className="space-y-14">
            <p className="font-medium text-[30px]">
              Boost your cold outreach efforts without worrying about daily
              limits or damaging your email reputation.
            </p>
            <p className="flex items-start text-[20px]">
              <img
                src={checkIcon}
                alt="Check"
                className="w-6 h-6 mr-3 mt-1"
              />
              Turn prospects into qualified leads and close deals, all within a single cold email platform.
            </p>
            <p className="flex items-start text-[20px]">
              <img
                src={checkIcon}
                alt="Check"
                className="w-6 h-6 mr-3 mt-1"
              />
              Rotate messages automatically with just one click.
            </p>
            <p className="flex items-start text-[20px]">
              <img
                src={checkIcon}
                alt="Check"
                className="w-6 h-6 mr-3 mt-1"
              />
              Set up campaigns and link mailboxes effortlessly with just one simple step.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex items-center justify-center">
          <div className="absolute right-[10px] w-[700px] h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative">
            <img
              src={importedImage}
              alt="Description of the image"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-0 h-[50px] right-0 bg-custom-blue text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors">
              Stop Landing In Spam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPipelineBuilder;
