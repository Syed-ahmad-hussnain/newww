import React, { useEffect, useCallback } from "react";
import { Typewriter } from 'react-simple-typewriter';
import { ArrowDownCircle } from 'lucide-react';
import "@fontsource/poppins";

import Navbar from "../../Components/Navbar/Navbar";
import LeadPipelineComponent from "../../Components/Landing_Pages_Components/2_component_landing_page/leadpipeline";
import EmailPipelineBuilder from "../../Components/Landing_Pages_Components/Leadpipeline/emailpipelinebuilder";
import Slideshow from "../../Components/Landing_Pages_Components/Slides/Slideshow";
import Integrations from "../../Components/Landing_Pages_Components/Integrations/Integrations";
import Solutions from "../../Components/Landing_Pages_Components/solutions/Solutions";
import FAQ from "../../Components/Landing_Pages_Components/Questions/FAQ";
import Footer from "../../Components/Landing_Pages_Components/footer/footer";

import graphImage from "../../assets/Images/image-temporary.jpg";

const LandingPage = () => {
  useEffect(() => {
    const button = document.querySelector('.get-started-button');
    const handleMouseOver = () => {
      button.style.transition = 'transform 0.5s ease-in-out';
      button.style.transform = 'scale(1.05)';
    };
    const handleMouseOut = () => {
      button.style.transition = 'transform 0.5s ease-in-out';
      button.style.transform = 'scale(1)';
    };

    button.addEventListener('mouseover', handleMouseOver);
    button.addEventListener('mouseout', handleMouseOut);

    return () => {
      button.removeEventListener('mouseover', handleMouseOver);
      button.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const scrollToBottom = useCallback(() => {
    const startPosition = window.pageYOffset;
    const targetPosition = document.documentElement.scrollHeight - window.innerHeight;
    const distance = targetPosition - startPosition;
    const duration = 5500;
    let start = null;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  }, []);

  return (
    <div className="overflow-auto relative">
      <div className="overflow-hidden relative">
        <div className="relative bg-custom-gradient rounded-br-[50px] h-screen text-white p-4 sm:p-6 md:p-8 flex flex-col justify-center font-poppins">
          <Navbar />
          <main className="flex flex-col md:flex-row justify-between items-start space-x-4 md:space-x-12 lg:space-x-24 flex-grow mt-8 md:mt-16">
            <div className="md:w-7/12 mb-8 md:mb-0 space-y-4 md:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold p-2 md:p-4">
                  Transform
                </h2>
                <h1 className="text-8xl md:text-8xl lg:text-9xl xl:text-12xl font-bold leading-none p-2 md:p-4 shiny-text">
                  Cold Email
                </h1>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold p-2 md:p-4">
                  Campaigns into{" "}
                  <span className="bg-white px-2 py-1 md:px-3 md:py-2 rounded-xl md:rounded-2xl font-bold">
                    <span className="text-gradient">Stay Leads</span>
                  </span>
                </h3>
              </div>
              <p className="text-purple-200 max-w-4xl text-base md:text-lg lg:text-xl leading-relaxed p-2 md:p-4">
                <Typewriter
                  words={['With an infinite number of mailboxes, warmups, multi-channel infrastructure, and a unibox that manages your whole revenue cycle in one location, you can scale your outreach with confidence']}
                  loop={true}
                  cursor
                  cursorStyle='.'
                  typeSpeed={40}
                  deleteSpeed={0}
                  delaySpeed={4000}
                />
              </p>
            </div>
            <div className="md:w-5/12 relative p-2 md:p-4">
              <div className="w-full h-[250px] md:h-[300px] lg:h-[350px] bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={graphImage} 
                  alt="Graph" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </main>
          <div className="mt-8 md:mt-12 lg:mt-16 flex justify-between items-end p-2 md:p-4">
            <div className="bg-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 inline-block">
              <p className="text-lg md:text-xl lg:text-2xl mb-1 md:mb-2">
                Maximize Your Outreach Potential
              </p>
              <p className="text-base md:text-lg lg:text-xl">
                with{" "}
                <span className="italic font-bold text-xl md:text-2xl lg:text-3xl">
                  Unlimited Accounts
                </span>
              </p>
            </div>
            <button 
              onClick={scrollToBottom}
              className="absolute right-[30px] bottom-[130px] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-transparent border-4 rounded-full flex items-center justify-center transition-transform duration-700 hover:scale-110"
            >
              <ArrowDownCircle className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
            </button>
          </div>
        </div>
        <div className="bottom-[-15px] z-[10] absolute right-[-15px] rounded-tl-[58px] border-white border-8 bg-white">
          <button className="get-started-button border border-[5px] button-with-gradient-border mb-4 mr-4 bg-white text-purple-600 p-3 md:p-4 lg:p-6 rounded-full font-semibold hover:bg-gray-100 text-lg md:text-xl lg:text-2xl transition-all duration-500">
            <p className="text-gradient">Get Started for free</p>
          </button>
        </div>
        <div
          className="h-16 md:h-20 w-20 md:w-28 bg-transparent absolute bottom-[0px] right-[280px] md:right-[296px] rounded-br-[64px]"
          style={{ boxShadow: "27px 17px 0 #fff" }}
        />
        <div
          className="h-16 md:h-20 w-20 md:w-28 bg-transparent absolute bottom-[85px] md:bottom-[105px] right-[0px] rounded-br-[60px]"
          style={{ boxShadow: "27px 17px 0 #fff" }}
        />
      </div>
      <div className="space-y-24 my-24">
        <LeadPipelineComponent />
        <EmailPipelineBuilder />
        <Slideshow />
        <Integrations />
        <Solutions />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;