import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CampaignContext } from '../../Pages/Campaign-addnew';
import Campaignimg from "../../assets/Images/campaign-launch.png";
import CustomPaperPlaneIcon from "../../assets/Icons/icon-campaign.png";

const MyCampaign = ({ onNext }) => {
  const { campaignName, setCampaignName, error, setError } = useContext(CampaignContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (campaignName.trim() === "") {
      setError("Campaign name is required");
    } else {
      setError("");
      onNext();
    }
  };

  return (
    <div className="w-full max-w-[740px] mx-auto">
      <img
        src={Campaignimg}
        alt="Campaign illustration"
        className="mb-8 w-full h-auto"
      />
      <h1 className="mb-4 font-poppins text-[40px] font-medium leading-[48px] tracking-[-0.02em] text-left">
        Let's launch a new campaign.
      </h1>
      <p className="mb-4 text-left">Is there a name you would like to give it?</p>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
            <img
              src={CustomPaperPlaneIcon}
              alt="Campaign icon"
              className="w-[35px] h-[35px]"
            />
          </div>
          <input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            className="border border-gray-900 border-2 rounded-full px-4 py-2 pl-14 w-full h-[50px] fs focus:outline-none"
            placeholder="My Campaign"
            aria-invalid={error ? "true" : "false"}
          />
        </div>
        {error && (
          <p className="text-red-500 mt-2 text-left" role="alert">{error}</p>
        )}
       
      </form>
    </div>
  );
};

MyCampaign.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default MyCampaign;