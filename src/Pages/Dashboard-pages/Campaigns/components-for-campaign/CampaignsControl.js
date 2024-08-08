import React from 'react';
import CampaignFiltersAndSort from './CampaignFilter';
import CampaignItem from './Campaignlist';
import { Trash2 } from "lucide-react";
import NumberedCheckbox from './NumberedCheckbox';

const CampaignControls = ({
  searchTerm,
  handleSearchInputChange,
  handleSearchKeyPress,
  handleSearch,
  selectedCount,
  handleDelete,
  activeFilter,
  activeSort,
  applyFilter,
  campaigns,
  selectedCampaigns,
  handleSelectCampaign,
  handlePlayPause,
  loadingCampaigns,
  selectAll,
  handleSelectAll,
}) => {
  return (
    <div className="space-y-6">
      <CampaignFiltersAndSort
        activeFilter={activeFilter}
        activeSort={activeSort}
        applyFilter={applyFilter}
        searchTerm={searchTerm}
        handleSearchInputChange={handleSearchInputChange}
        handleSearchKeyPress={handleSearchKeyPress}
        handleSearch={handleSearch}
      />
      
      

      <div className="grid grid-cols-12 gap-2 px-5 py-3 font-medium text-gray-700 text-sm md:text-base">
        <div className="col-span-12 md:col-span-4 flex items-center mb-2 md:mb-0">
          <div className="mr-4">
            {campaigns.length > 0 && (
              <NumberedCheckbox
                isChecked={selectAll}
                onChange={handleSelectAll}
                number={selectedCount > 0 ? selectedCount : ""}
              />
            )}
          </div>
          <div>Name</div>
        </div>
        <div className="col-span-2 md:col-span-1 flex justify-center items-center">Progress</div>
        <div className="col-span-2 md:col-span-1 flex justify-center items-center">Outcomes</div>
        <div className="col-span-2 md:col-span-1 flex justify-center items-center">Sent</div>
        <div className="col-span-2 md:col-span-1 flex justify-center items-center">Clicks</div>
        <div className="col-span-2 md:col-span-2 flex justify-center items-center">Replied</div>
        <div className="col-span-2 md:col-span-1 flex justify-center items-center">Status</div>
      </div>

      <div className="space-y-4">
        {campaigns.map((campaign, index) => (
          <CampaignItem
            key={campaign.id}
            campaign={campaign}
            selected={selectedCampaigns[campaign.id]}
            handleSelectCampaign={handleSelectCampaign}
            handlePlayPause={handlePlayPause}
            loading={loadingCampaigns[campaign.id]}
            handleDelete={() => handleDelete(campaign.id)}
            NumberedCheckbox={NumberedCheckbox}
            checkboxNumber={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default CampaignControls;