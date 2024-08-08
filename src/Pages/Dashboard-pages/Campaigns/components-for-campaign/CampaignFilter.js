import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, ChevronUp, Plus, Trash2 } from "lucide-react";

const FilterOption = ({ id, label, icon, isSelected, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`px-4 py-2 rounded-full text-sm border w-[140px] h-[50px] flex items-center justify-center transition-all duration-300 ${
      isSelected
        ? 'bg-indigo-600 text-white'
        : 'bg-white text-gray-600 hover:bg-gray-100'
    }`}
  >
    {icon && <span className="mr-2">{icon}</span>}
    {label}
  </button>
);

const CampaignFilter = ({ 
  activeFilter, 
  activeSort, 
  applyFilter, 
  searchTerm,
  handleSearchInputChange,
  handleSearchKeyPress,
  handleSearch,
  selectedCount,
  handleDelete
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [tempActiveFilter, setTempActiveFilter] = useState(activeFilter);
  const [tempActiveSort, setTempActiveSort] = useState(activeSort);
  const filterRef = useRef(null);
  const sortRef = useRef(null);

  const filterOptions = [
    { id: "all", label: "All Status", icon: "◯" },
    { id: "active", label: "Active", icon: "•" },
    { id: "draft", label: "Draft", icon: "◯" },
    { id: "pause", label: "Pause", icon: "‖" },
    { id: "error", label: "Error", icon: "△" },
    { id: "completed", label: "Completed", icon: "✓" },
    { id: "evergreen", label: "Ever Green", icon: "↻" },
  ];

  const sortOptions = [
    { id: "newest", label: "Newest First" },
    { id: "oldest", label: "Oldest First" },
    { id: "az", label: "A-Z (Name)" },
    { id: "za", label: "Z-A (Name)" },
  ];

  const handleFilterSelect = (filterId) => {
    setTempActiveFilter(filterId === tempActiveFilter ? 'all' : filterId);
  };

  const handleSortSelect = (sortId) => {
    setTempActiveSort(sortId);
  };

  const handleApplyFilter = () => {
    applyFilter(tempActiveFilter, tempActiveSort);
    setIsFilterOpen(false);
  };

  const handleApplySort = () => {
    applyFilter(tempActiveFilter, tempActiveSort);
    setIsSortOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-800">Campaigns</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Campaigns"
              className="pl-10 pr-4 py-2 border border-gray-300 h-[50px] w-[500px] rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              value={searchTerm}
              onChange={handleSearchInputChange}
              onKeyPress={handleSearchKeyPress}
            />
            <button
              onClick={handleSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600"
            >
              <Search size={20} />
            </button>
          </div>
          {selectedCount > 0 ? (
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 h-[50px] w-[150px] text-center rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
            >
              <Trash2 size={20} className="mr-2" />
              Delete
            </button>
          ) : (
            <Link 
              to="/campaigns/add-new"
              className="bg-indigo-600 text-white px-4 py-2 h-[50px] w-[150px] text-center rounded-full flex items-center justify-center hover:bg-indigo-700 transition duration-300"
            >
              <Plus size={20} className="mr-2" />
              Add New
            </Link>
          )}
        </div>
      </div>
      <div className="flex justify-end items-center space-x-4">
        {/* Filter dropdown */}
        <div className="relative" ref={filterRef}>
          <button
            className={`flex items-center px-4 py-2 bg-white rounded-full transition duration-300 ${
              isFilterOpen || activeFilter !== 'all'
                ? 'text-indigo-600 border-2 border-indigo-600'
                : 'text-gray-600 border border-gray-200 hover:border-indigo-600 hover:text-indigo-600'
            }`}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={18} className="mr-2" />
            Filter
            {isFilterOpen ? <ChevronUp size={18} className="ml-2" /> : <ChevronDown size={18} className="ml-2" />}
          </button>
          {isFilterOpen && (
            <div className="absolute flex flex-col items-center right-0 mt-2 w-[500px] bg-white rounded-lg shadow-lg p-4 z-10">
              <div className="grid grid-cols-3 gap-5 mb-4 ">
                {filterOptions.slice(0, 6).map((option) => (
                  <FilterOption
                    key={option.id}
                    {...option}
                    isSelected={tempActiveFilter === option.id}
                    onClick={handleFilterSelect}
                  />
                ))}
                <div className="col-span-3 flex justify-center ">
                  <div className="w-1/3">
                    <FilterOption
                      {...filterOptions[6]}
                      isSelected={tempActiveFilter === filterOptions[6].id}
                      onClick={handleFilterSelect}
                    />
                  </div>
                </div>
              </div>
              <button
                className="w-[170px] h-[50px] relative bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
                onClick={handleApplyFilter}
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Sort dropdown */}
        <div className="relative" ref={sortRef}>
          <button
            className={`flex items-center px-4 py-2 bg-white rounded-full transition duration-300 ${
              isSortOpen || activeSort !== sortOptions[0].id
                ? 'border-2 border-indigo-600 text-indigo-600'
                : 'border border-gray-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-600'
            }`}
            onClick={() => setIsSortOpen(!isSortOpen)}
          >
            {sortOptions.find((option) => option.id === activeSort)?.label}
            {isSortOpen ? <ChevronUp size={20} className="ml-2" /> : <ChevronDown size={20} className="ml-2" />}
          </button>
          {isSortOpen && (
            <div className="absolute right-0 mt-2 w-[400px] bg-white rounded-lg shadow-lg p-4 z-10">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {sortOptions.slice(0, 3).map((option) => (
                  <button
                    key={option.id}
                    className={`px-2 py-2 text-sm flex items-center justify-center rounded-full transition duration-300 h-[50px] ${
                      tempActiveSort === option.id
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                    onClick={() => handleSortSelect(option.id)}
                  >
                    <span className="text-center leading-tight">{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-center mb-4">
                <button
                  key={sortOptions[3].id}
                  className={`px-2 py-2 text-sm flex items-center justify-center rounded-full transition duration-300 h-[50px] w-1/3 ${
                    tempActiveSort === sortOptions[3].id
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                  onClick={() => handleSortSelect(sortOptions[3].id)}
                >
                  <span className="text-center leading-tight">{sortOptions[3].label}</span>
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  className="w-1/2 h-[40px] bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
                  onClick={handleApplySort}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampaignFilter;