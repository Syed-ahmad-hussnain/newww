import React from 'react';
import { Edit, Play, Pause, Loader, MoreVertical } from "lucide-react";
import CampaignOptionsMenu from './CampaignsMenu';

const CircularProgressBar = ({ percentage }) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="50" height="50" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r={radius} stroke="#e6e6e6" strokeWidth="5" fill="none" />
      <circle
        cx="25"
        cy="25"
        r={radius}
        stroke="#3b82f6"
        strokeWidth="5"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 25 25)"
      />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="12" fontWeight="bold">
        {percentage}%
      </text>
    </svg>
  );
};

const CampaignItem = ({ 
  campaign, 
  selected, 
  handleSelectCampaign, 
  handlePlayPause, 
  loading, 
  handleDelete,
  NumberedCheckbox,
  checkboxNumber
}) => {
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = React.useState(false);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      case 'paused': return 'bg-orange-500';
      case 'draft': return 'bg-gray-700';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    });
  };

  const isPlayButtonDisabled = ['error', 'draft', 'completed'].includes(campaign.status.toLowerCase());

  return (
    <div className="grid grid-cols-12 gap-2 items-center px-4 py-3 bg-white rounded-[15px] shadow-[1px_10px_25px_0px_rgba(3,2,41,0.07)]">
      <div className="col-span-4 flex items-center">
        <div className="mr-4">
          <NumberedCheckbox
            isChecked={selected}
            onChange={() => handleSelectCampaign(campaign.id)}
            number={checkboxNumber}
          />
        </div>
        <div className="flex flex-col items-start">
          <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
          <div className="text-xs text-gray-500">
            Started: {campaign.startDate ? formatDate(campaign.startDate) : 'Not started'}
          </div>
        </div>
      </div>
      <div className="col-span-1 flex justify-center">
        {campaign.progress !== null ? (
          <CircularProgressBar percentage={campaign.progress} />
        ) : (
          '-'
        )}
      </div>
      <div className="col-span-1 text-sm text-gray-600 text-center">
        {campaign.outcomes || 'N/A'}
      </div>
      <div className="col-span-1 text-sm text-gray-600 text-center">
        {campaign.sent}
      </div>
      <div className="col-span-1 text-sm text-gray-600 text-center">
        {campaign.clicks}
      </div>
      <div className="col-span-2 text-sm text-gray-600 text-center">
        {campaign.replied}
      </div>
      <div className="col-span-1 text-sm flex justify-center">
        <span className={`px-4 py-2 text-sm font-medium w-[120px] text-center text-white inline-block ${getStatusColor(campaign.status)} rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.1)]`}>
          {campaign.status}
        </span>
      </div>
      <div className="col-span-1 flex justify-end space-x-2">
        <button className="text-gray-400 hover:text-gray-600">
          <Edit size={20} />
        </button>
        {loading ? (
          <Loader size={20} className="animate-spin" />
        ) : campaign.status.toLowerCase() === 'active' ? (
          <button 
            className="text-gray-400 hover:text-gray-600" 
            onClick={() => handlePlayPause(campaign.id)}
          >
            <Pause size={20} />
          </button>
        ) : (
          <button 
            className={`text-gray-400 ${isPlayButtonDisabled ? 'cursor-not-allowed opacity-50' : 'hover:text-gray-600'}`} 
            onClick={() => !isPlayButtonDisabled && handlePlayPause(campaign.id)}
            disabled={isPlayButtonDisabled}
          >
            <Play size={20} />
          </button>
        )}
        <div className="relative">
          <button className="text-gray-400 hover:text-gray-600" onClick={() => setIsOptionsMenuOpen(!isOptionsMenuOpen)}>
            <MoreVertical size={20} />
          </button>
          <CampaignOptionsMenu 
            isOpen={isOptionsMenuOpen}
            onClose={() => setIsOptionsMenuOpen(false)}
            onOptionSelect={(action) => {
              if (action === 'delete') {
                handleDelete(campaign.id);
              }
              // Handle other actions...
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;