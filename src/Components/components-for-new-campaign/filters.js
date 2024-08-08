import React, { useState, useEffect } from 'react';
import ChevronDown from '../../assets/Icons/icon-select-arrow-down.png';
import CustomCheckbox from '../Buttons/Custom-checkbox';

const sampleData = {
  warmupStatus: ['Active', 'Inactive'],
  tagName: ['Important', 'Follow-up', 'Urgent', 'Personal'],
  clientName: ['Client A', 'Client B', 'Client C', 'Client D']
};

const FilterSection = ({ onClose, onApply, initialFilters }) => {
  const [filters, setFilters] = useState(initialFilters);
  const [openDropdown, setOpenDropdown] = useState('');
  const [options, setOptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setOptions(sampleData);
      }, 500);
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterName) => {
    setFilters(prev => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? '' : dropdown);
  };

  const handleDropdownSelect = (dropdown, value) => {
    setFilters(prev => ({ ...prev, [dropdown]: value }));
    setOpenDropdown('');
  };

  const renderDropdown = (name, value, placeholder) => (
    <div className="mb-4 mt-4 relative">
      <div 
        className="flex justify-between items-center border h-[50px] rounded-full px-4 py-2 cursor-pointer"
        onClick={() => handleDropdownToggle(name)}
      >
        <span className="text-gray-500">{value || placeholder}</span>
        <img src={ChevronDown} className="text-gray-400 h-8 w-8" alt="dropdown" />
      </div>
      {openDropdown === name && options[name] && (
        <div className="absolute top-full left-0 right-0 bg-white border rounded-md mt-1 shadow-lg z-10">
          {options[name].map((option, index) => (
            <div 
              key={index} 
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleDropdownSelect(name, option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-[490px] h-[500px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Filter</h3>
        <button className="text-indigo-600 text-sm hover:underline" onClick={onClose}>Clear Filter</button>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center mb-6">
          <CustomCheckbox
            id="connectedMailboxes"
            checked={filters.connectedMailboxes}
            onChange={() => handleFilterChange('connectedMailboxes')}
            className="mr-3"
          />
          <label htmlFor="connectedMailboxes" className="text-sm">
            Mailboxes currently connected to this campaign
          </label>
        </div>
        <div className="flex items-center">
          <CustomCheckbox
            id="disconnectedAccounts"
            checked={filters.disconnectedAccounts}
            onChange={() => handleFilterChange('disconnectedAccounts')}
            className="mr-3"
          />
          <label htmlFor="disconnectedAccounts" className="text-sm">
            Filter disconnected accounts
          </label>
        </div>
      </div>
      
      {renderDropdown('warmupStatus', filters.warmupStatus, 'Warmup Status')}
      {renderDropdown('tagName', filters.tagName, 'Tag Name')}
      {renderDropdown('clientName', filters.clientName, 'Client Name')}
      
      <div className="flex justify-between mt-6">
        <button onClick={onClose} className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-full">
          Cancel
        </button>
        <button onClick={() => onApply(filters)} className="px-6 py-2 bg-indigo-600 text-white rounded-full">
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterSection;