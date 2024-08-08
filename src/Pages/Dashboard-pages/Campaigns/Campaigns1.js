import React, { useState, useEffect } from "react";
import CampaignControls from "./components-for-campaign/CampaignsControl";
import DeletePopup from "./components-for-campaign/Deletepopup";
import { initialCampaigns } from "./components-for-campaign/CampaignsData";
import CampaignOptionsMenu from "./components-for-campaign/CampaignsMenu";

const CampaignSection = () => {
  const [selectedCampaigns, setSelectedCampaigns] = useState({});
  const [selectAll, setSelectAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSort, setActiveSort] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [loadingCampaigns, setLoadingCampaigns] = useState({});
  const [campaignToDelete, setCampaignToDelete] = useState(null);
  const [optionsMenuOpen, setOptionsMenuOpen] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

  useEffect(() => {
    setFilteredCampaigns(initialCampaigns);
  }, []);

  const applyFilter = (filter, sort) => {
    setActiveFilter(filter);
    setActiveSort(sort);
    let filtered = initialCampaigns;

    if (filter && filter !== "all") {
      filtered = filtered.filter(
        (campaign) => campaign.status.toLowerCase() === filter
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((campaign) =>
        campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    filtered = sortCampaigns(filtered, sort);

    setFilteredCampaigns(filtered);
  };

  const sortCampaigns = (campaigns, sortType) => {
    let sorted = [...campaigns];

    switch (sortType) {
      case "newest":
        sorted.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
        break;
      case "oldest":
        sorted.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        break;
      case "az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return sorted;
  };

  const handleSearch = () => {
    applyFilter(activeFilter, activeSort);
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleDelete = (campaignId) => {
    if (campaignId) {
      const campaign = filteredCampaigns.find(c => c.id === campaignId);
      setCampaignToDelete(campaign);
    } else {
      setCampaignToDelete(null);
    }
    setShowDeletePopup(true);
  };

  const confirmDelete = () => {
    if (campaignToDelete) {
      setFilteredCampaigns(prev => prev.filter(c => c.id !== campaignToDelete.id));
    } else {
      setFilteredCampaigns(prev => prev.filter(c => !selectedCampaigns[c.id]));
      setSelectedCampaigns({});
      setSelectAll(false);
    }
    setShowDeletePopup(false);
    setCampaignToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeletePopup(false);
    setCampaignToDelete(null);
  };

  const handlePlayPause = (id) => {
    setLoadingCampaigns((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setFilteredCampaigns((prev) =>
        prev.map((campaign) =>
          campaign.id === id
            ? {
                ...campaign,
                status: campaign.status === "Active" ? "Paused" : "Active",
              }
            : campaign
        )
      );
      setLoadingCampaigns((prev) => ({ ...prev, [id]: false }));
    }, 1000);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const newSelectedCampaigns = {};
    filteredCampaigns.forEach((campaign) => {
      newSelectedCampaigns[campaign.id] = !selectAll;
    });
    setSelectedCampaigns(newSelectedCampaigns);
  };

  const handleSelectCampaign = (id) => {
    setSelectedCampaigns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddNew = () => {
    // Implement the logic to add a new campaign
    console.log("Add new campaign");
  };

  const handleOptionsClick = (campaignId) => {
    setSelectedCampaignId(campaignId);
    setOptionsMenuOpen(true);
  };

  const handleOptionSelect = (action) => {
    // Handle different actions here
    console.log(`Selected action: ${action} for campaign: ${selectedCampaignId}`);
    setOptionsMenuOpen(false);
  };

  const handleCampaignRename = (newName) => {
    setFilteredCampaigns((prev) =>
      prev.map((campaign) =>
        campaign.id === selectedCampaignId
          ? { ...campaign, name: newName }
          : campaign
      )
    );
  };

  const selectedCount = Object.values(selectedCampaigns).filter(Boolean).length;

  return (
    <div className="bg-white h-full p-2 sm:p-4 md:p-6 relative md:pr-16 lg:pr-16 md:pl-12 lg:pl-16 grid gap-4 sm:gap-8 md:gap-12 lg:gap-16 overflow-hidden">
      <div className={showDeletePopup ? "filter blur-sm" : ""}>
        <CampaignControls
          searchTerm={searchTerm}
          handleSearchInputChange={handleSearchInputChange}
          handleSearchKeyPress={handleSearchKeyPress}
          handleSearch={handleSearch}
          selectedCount={selectedCount}
          handleDelete={handleDelete}
          activeFilter={activeFilter}
          activeSort={activeSort}
          applyFilter={applyFilter}
          campaigns={filteredCampaigns}
          selectedCampaigns={selectedCampaigns}
          handleSelectCampaign={handleSelectCampaign}
          handlePlayPause={handlePlayPause}
          loadingCampaigns={loadingCampaigns}
          selectAll={selectAll}
          handleSelectAll={handleSelectAll}
          handleAddNew={handleAddNew}
          handleOptionsClick={handleOptionsClick}
        />
      </div>
      {showDeletePopup && (
        <DeletePopup 
          confirmDelete={confirmDelete} 
          cancelDelete={cancelDelete}
          campaignName={campaignToDelete ? campaignToDelete.name : null}
        />
      )}
      <CampaignOptionsMenu
        isOpen={optionsMenuOpen}
        onClose={() => setOptionsMenuOpen(false)}
        onOptionSelect={handleOptionSelect}
        campaignName={filteredCampaigns.find(c => c.id === selectedCampaignId)?.name}
        onCampaignRename={handleCampaignRename}
      />
    </div>
  );
};

export default CampaignSection;