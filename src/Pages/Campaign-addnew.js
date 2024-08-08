import React, { useState, createContext } from "react";
import { ArrowLeft, Settings } from "lucide-react";
import CampaignSettingsPopup from "../Components/components-for-new-campaign/Camapaign-settings";
import Stepper from "../Components/components-for-new-campaign/stepper";
import MyCampaign from "../Components/components-for-new-campaign/MyCampaign";
import ImportLeads from "../Components/components-for-new-campaign/Importleads";
import Sequences from "../Components/components-for-new-campaign/Sequences";
import Schedule from "../Components/components-for-new-campaign/Schedule";
import Preferences from "../Components/components-for-new-campaign/Prefference";
import LaunchConfirmationPopup from '../Components/Popups/Launch-completed';

// Create a context for campaign data
export const CampaignContext = createContext();

const steps = [
  { number: "01", name: "My Campaign" },
  { number: "02", name: "Import Leads" },
  { number: "03", name: "Sequences" },
  { number: "04", name: "Schedule" },
  { number: "05", name: "Preferences" },
];

const NewCampaignPage = () => {
  const [campaignName, setCampaignName] = useState("My Campaign");
  const [currentStep, setCurrentStep] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLaunchPopupOpen, setIsLaunchPopupOpen] = useState(false);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleLaunch = () => {
    setIsLaunchPopupOpen(true);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <MyCampaign onNext={handleNext} />;
      case 1:
        return <ImportLeads />;
      case 2:
        return <Sequences />;
      case 3:
        return <Schedule />;
      case 4:
        return <Preferences />;
      default:
        return null;
    }
  };

  return (
    <CampaignContext.Provider value={{ campaignName, setCampaignName, error, setError }}>
      <div className="flex flex-col min-h-screen bg-white">
        <header className="bg-white p-6 flex flex-col md:flex-row justify-between items-center">
          <button 
            className="text-purple-600 border-2 rounded-full border-purple-600 w-12 h-12 flex items-center justify-center mb-4 md:mb-0"
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex-grow flex justify-center overflow-x-auto">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>
          <button 
            className="bg-custom-blue rounded-full w-12 h-12 flex items-center justify-center mt-4 md:mt-0"
            aria-label="Settings"
            onClick={() => setIsSettingsOpen(true)}
          >
            <Settings size={24} className="text-white" />
          </button>
        </header>

        <main className="flex-grow flex flex-col items-center p-4 md:p-8">
          {renderStepContent()}
        </main>

        <footer className="bg-white p-4 flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/6 mb-4 md:mb-0">
            <div className="bg-gray-200 h-2 rounded-full">
              <div
                className="bg-custom-gradient h-2 rounded-full"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                role="progressbar"
                aria-valuenow={((currentStep + 1) / steps.length) * 100}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Create Campaign Progress:{" "}
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Completed
            </p>
          </div>
          <div>
            <button
              className="text-gray-600 px-6 py-4 border-custom-blue border-2 rounded-full mr-4 text-lg font-semibold"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              Previous
            </button>
            {currentStep === steps.length - 1 ? (
              <button
                className="bg-custom-blue text-white px-12 py-4 rounded-full text-lg font-semibold"
                onClick={handleLaunch}
              >
                Launch
              </button>
            ) : (
              <button
                className="bg-custom-blue text-white px-12 py-4 rounded-full text-lg font-semibold"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </footer>

        <CampaignSettingsPopup 
          isOpen={isSettingsOpen} 
          onClose={() => setIsSettingsOpen(false)} 
        />

        <LaunchConfirmationPopup 
          isOpen={isLaunchPopupOpen} 
          onClose={() => setIsLaunchPopupOpen(false)} 
        />
      </div>
    </CampaignContext.Provider>
  );
};

export default NewCampaignPage;