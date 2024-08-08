import React from "react";
import Integrationimg from "../../../assets/Images/Image-integration.png";
import { Typewriter } from 'react-simple-typewriter'; // Import the typing animation component

const Integrations = () => {
  return (
   <div className="relative right-[0px]"> 
    <div className=" bg-custom-gradient text-white p-8 rounded-3xl w-[1625px] mx-auto">
      <div className="flex flex-col md:flex-row items-center ">
        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
          <h2 className="font-poppins text-[45px] font-[550] leading-[46.8px] text-left mb-4">
            Effortlessly integrate with your favorite apps  for a smooth and
            streamlined experience.
          </h2>
          <br />
          <p className="mb-6 text-[21px] leading-[27px] font-light text-gray-300">
          <Typewriter
                    words={['Connect all your tools and simplify your workflow effortlessly.  Smartlead integrates seamlessly with the apps you already use and love every day']}
                    loop={true}
                    cursor
                    cursorStyle='.'
                    typeSpeed={60}
                    deleteSpeed={0}
                    delaySpeed={4000}
                  /> 
           
            
          </p>
          <br />
          <button className="bg-transparent text-white border-[2.5px] h-[70px] w-[250px] px-6 py-2 rounded-full border font-semibold hover:bg-white hover:text-purple-600 transition-colors transition-all duration-500 ease-in-out delay-25 ">
            See All Integrations
          </button>
        </div>
        <div className="w-[700px]">
          <img
            src={Integrationimg}
            alt="Integration illustration with app icons"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Integrations;
