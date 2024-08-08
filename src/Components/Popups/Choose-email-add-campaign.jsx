import React, { useState, useEffect, useCallback } from 'react';
import { X, Filter, Search, Copy, User, Save } from 'lucide-react';
import CustomCheckbox from '../Buttons/Custom-checkbox';
import FilterSection from '../components-for-new-campaign/filters';

const sampleEmailAccounts = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      reputationScore: 95,
      connected: true,
      warmupStatus: "Active",
      tags: ["Important", "Sales", "Urgent"],
      clientName: "ABC Corp"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      reputationScore: 88,
      connected: true,
      warmupStatus: "Active",
      tags: ["Marketing", "Lead", "Follow-up"],
      clientName: "XYZ Inc"
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.j@example.com",
      reputationScore: 92,
      connected: false,
      warmupStatus: "Inactive",
      tags: ["Support", "Technical", "Urgent"],
      clientName: "TechSolutions LLC"
    },
    {
      id: 4,
      name: "Bob Williams",
      email: "bob.w@example.com",
      reputationScore: 79,
      connected: true,
      warmupStatus: "Active",
      tags: ["Sales", "VIP", "Personal"],
      clientName: "ABC Corp"
    },
    {
      id: 5,
      name: "Carol Brown",
      email: "carol.brown@example.com",
      reputationScore: 97,
      connected: true,
      warmupStatus: "Active",
      tags: ["Executive", "Important", "Urgent"],
      clientName: "XYZ Inc"
    },
    {
      id: 6,
      name: "David Lee",
      email: "david.lee@example.com",
      reputationScore: 85,
      connected: false,
      warmupStatus: "Inactive",
      tags: ["Marketing", "Lead", "Follow-up"],
      clientName: "MarketPro Co"
    },
    {
      id: 7,
      name: "Eva Garcia",
      email: "eva.g@example.com",
      reputationScore: 91,
      connected: true,
      warmupStatus: "Active",
      tags: ["Support", "VIP", "Urgent"],
      clientName: "TechSolutions LLC"
    },
    {
      id: 8,
      name: "Frank Chen",
      email: "frank.c@example.com",
      reputationScore: 83,
      connected: true,
      warmupStatus: "Active",
      tags: ["Sales", "New", "Follow-up"],
      clientName: "GlobalTrade Inc"
    },
    {
      id: 9,
      name: "Grace Kim",
      email: "grace.kim@example.com",
      reputationScore: 94,
      connected: true,
      warmupStatus: "Active",
      tags: ["Executive", "VIP", "Important"],
      clientName: "ABC Corp"
    },
    {
      id: 10,
      name: "Henry Wilson",
      email: "henry.w@example.com",
      reputationScore: 76,
      connected: false,
      warmupStatus: "Inactive",
      tags: ["Support", "Technical", "Urgent"],
      clientName: "TechGenius Co"
    },
    {
      id: 11,
      name: "Ivy Nguyen",
      email: "ivy.n@example.com",
      reputationScore: 89,
      connected: true,
      warmupStatus: "Active",
      tags: ["Marketing", "Lead", "Personal"],
      clientName: "MarketPro Co"
    },
    {
      id: 12,
      name: "Jack Taylor",
      email: "jack.t@example.com",
      reputationScore: 82,
      connected: true,
      warmupStatus: "Active",
      tags: ["Sales", "New", "Follow-up"],
      clientName: "XYZ Inc"
    },
    {
      id: 13,
      name: "Kelly Martinez",
      email: "kelly.m@example.com",
      reputationScore: 98,
      connected: true,
      warmupStatus: "Active",
      tags: ["Executive", "Important", "Urgent"],
      clientName: "GlobalTrade Inc"
    },
    {
      id: 14,
      name: "Liam Johnson",
      email: "liam.j@example.com",
      reputationScore: 87,
      connected: false,
      warmupStatus: "Inactive",
      tags: ["Support", "Technical", "Follow-up"],
      clientName: "TechGenius Co"
    },
    {
      id: 15,
      name: "Mia Robinson",
      email: "mia.r@example.com",
      reputationScore: 93,
      connected: true,
      warmupStatus: "Active",
      tags: ["Marketing", "VIP", "Personal"],
      clientName: "MarketPro Co"
    }
  ];
  
  

  const EmailAccountsPopup = ({ isOpen, onClose }) => {
    const [selectedAccounts, setSelectedAccounts] = useState({});
    const [allSelected, setAllSelected] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filteredAccounts, setFilteredAccounts] = useState(sampleEmailAccounts);
    const [filters, setFilters] = useState({
      connectedMailboxes: false,
      disconnectedAccounts: false,
      warmupStatus: '',
      tagName: '',
      clientName: '',
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [appliedSearchTerm, setAppliedSearchTerm] = useState('');
  
    const applyFilters = useCallback(() => {
      let result = sampleEmailAccounts;
  
      if (filters.connectedMailboxes) {
        result = result.filter(account => account.connected);
      }
  
      if (filters.disconnectedAccounts) {
        result = result.filter(account => !account.connected);
      }
  
      if (filters.warmupStatus) {
        result = result.filter(account => account.warmupStatus === filters.warmupStatus);
      }
  
      if (filters.tagName) {
        result = result.filter(account => account.tags.includes(filters.tagName));
      }
  
      if (filters.clientName) {
        result = result.filter(account => account.clientName === filters.clientName);
      }
  
      if (appliedSearchTerm) {
        result = result.filter(account => 
          account.name.toLowerCase().includes(appliedSearchTerm.toLowerCase()) ||
          account.email.toLowerCase().includes(appliedSearchTerm.toLowerCase())
        );
      }
  
      setFilteredAccounts(result);
    }, [filters, appliedSearchTerm]);
  
    useEffect(() => {
      applyFilters();
    }, [applyFilters]);
  
    const handleCheckboxChange = (id) => {
      setSelectedAccounts(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    };
  
    const handleSelectAll = () => {
      setAllSelected(!allSelected);
      const newSelectedAccounts = {};
      filteredAccounts.forEach(account => {
        newSelectedAccounts[account.id] = !allSelected;
      });
      setSelectedAccounts(newSelectedAccounts);
    };
  
    const handleFilterChange = (newFilters) => {
      setFilters(newFilters);
      setIsFilterOpen(false);
    };
  
    const handleClearFilters = () => {
      setFilters({
        connectedMailboxes: false,
        disconnectedAccounts: false,
        warmupStatus: '',
        tagName: '',
        clientName: '',
      });
      setIsFilterOpen(false);
    };
  
    const handleSearch = () => {
      setAppliedSearchTerm(searchTerm);
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-3xl h-[750px] p-8 w-full max-w-5xl flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Email Accounts</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Email Accounts</h3>
            <div className="flex space-x-2">
              <button 
                className="flex items-center px-3 py-2 border rounded-full"
                onClick={() => setIsFilterOpen(true)}
              >
                <Filter size={16} className="mr-2" />
                Filter
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Emails"
                  className="pl-10 pr-12 py-2 border rounded-full border-[#9A9CBC] w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                
                <button
                  onClick={handleSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <Search size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-3 gap-56 px-4 text-sm font-medium text-gray-500">
            <div className="flex items-center">
              <CustomCheckbox 
                id="select-all"
                checked={allSelected}
                onChange={handleSelectAll}
                className="cursor-pointer mr-3"
              />
              <span>Name</span>
            </div>
            <div className="text-center">Emails</div>
            <div className="text-right">Reputation Score</div>
          </div>
          <div className="flex-grow overflow-auto scrollbar-hide">
            <div className="space-y-8 mb-6">
              {filteredAccounts.map((account) => (
                <div key={account.id} className="py-4 px-4 grid grid-cols-3 gap-4 items-center bg-white shadow-lg rounded-lg">
                  <div className="relative">
                    <div className="flex items-center">
                      <CustomCheckbox 
                        id={`account-${account.id}`} 
                        checked={selectedAccounts[account.id] || false}
                        onChange={() => handleCheckboxChange(account.id)}
                        className="cursor-pointer"
                      />
                      <label htmlFor={`account-${account.id}`} className="ml-3 font-medium cursor-pointer">
                        {account.name}
                      </label>
                      <div className="relative left-2 top-2 transform -translate-y-1/2 flex items-center space-x-2">
                        <Copy size={16} className="text-gray-400 cursor-pointer" />
                        <User size={16} className="text-gray-400 cursor-pointer" />
                      </div>
                    </div> 
                  </div>
                  <div className="text-center">{account.email}</div>
                  <div className="flex justify-end">
                    <span className="bg-[#30B0C7] w-[120px] text-center h-[30px] text-white px-4 py-1 rounded-lg text-sm font-medium">
                      {account.reputationScore}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-auto pt-4 flex justify-end">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
              <Save size={20} className="mr-2" />
              <span>Save Email accounts</span>
            </button>
          </div>
          
          {isFilterOpen && (
            <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
              <FilterSection 
                onClose={handleClearFilters} 
                onApply={handleFilterChange}
                initialFilters={filters}
              />
            </div>
          )}
          
        </div>
      </div>
    );
  };
  
  export default EmailAccountsPopup;