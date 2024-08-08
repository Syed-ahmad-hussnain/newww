import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { RefreshCw, Trash2, Check } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';

import csvimg from '../../assets/Icons/icon-svg (1).png';
import Upload from '../../assets/Icons/icon-upload.png';
import ChevronDown from '../../assets/Icons/icon-select-arrow-down.png';

const CustomSelect = ({ value, onChange, options, column, setCustomEntries }) => (
  <div className="flex items-center relative">
    <select
      value={value || ''}
      onChange={(e) => {
        onChange(column, e.target.value);
        if (e.target.value !== "CUSTOM_ENTRY") {
          setCustomEntries(prev => ({ ...prev, [column]: '' }));
        }
      }}
      className="appearance-none mt-1 block w-[311px] h-[52px] pl-3 pr-10 py-2 text-sm border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-full border-2"
      style={{
        background: 'white',
      }}
    >
      <option value="" className="text-red-500 py-3">Ignore Entry</option>
      {options.map((option) => (
        <option 
          key={option} 
          value={option}
          className={`${option === "CUSTOM_ENTRY" ? "text-green-500" : ""} py-3`}
        >
          {option === "CUSTOM_ENTRY" ? "Custom Entry" : option}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <img src={ChevronDown} alt='down' className='h-[40px] w-[40px]' />
    </div>
  </div>
);

const ImportLeads = () => {
  const [file, setFile] = useState(null);
  const [clientId, setClientId] = useState('');
  const [columns, setColumns] = useState([]);
  const [mappings, setMappings] = useState({});
  const [customEntries, setCustomEntries] = useState({});
  const [csvData, setCsvData] = useState([]);
  const [advancedOptions, setAdvancedOptions] = useState({
    allowGlobalBlockList: false,
    allowUnsubscribeList: true,
    excludeExistingLeads: false
  });

  const navigate = useNavigate();

  const options = useMemo(() => [
    "FIRST_NAME",
    "LAST_NAME",
    "TITLE",
    "COMPANY_NAME",
    "COUNTRY",
    "WEBSITE",
    "PERSON_LINKEDIN",
    "EMAIL",
    "INDUSTRY",
    "CUSTOM_ENTRY",
  ], []);

  const parseCsv = useCallback((file) => {
    Papa.parse(file, {
      complete: (results) => {
        const headers = results.data[0];
        const filteredHeaders = headers.filter(header => 
          header.toLowerCase() !== 'employee' && 
          header.toLowerCase() !== 'sub industry'
        );
        setColumns(filteredHeaders);
        setCsvData(results.data.slice(1));
        
        const initialMappings = filteredHeaders.reduce((acc, header) => {
          const matchingOption = options.find(opt => 
            opt.replace(/_/g, '').toLowerCase() === header.replace(/\s+/g, '').toLowerCase()
          );
          return { ...acc, [header]: matchingOption || '' };
        }, {});
        setMappings(initialMappings);
      },
      header: false,
      skipEmptyLines: true
    });
  }, [options]);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFile(file);
    parseCsv(file);
  }, [parseCsv]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: '.csv' });

  const handleMappingChange = (field, value) => {
    setMappings(prev => ({ ...prev, [field]: value }));
  };

  const handleAdvancedOptionChange = (option) => {
    setAdvancedOptions(prev => ({ ...prev, [option]: !prev[option] }));
  };

  const handleReupload = () => {
    setFile(null);
    setColumns([]);
    setCsvData([]);
    setMappings({});
    setCustomEntries({});
  };

  const handleDelete = () => {
    setFile(null);
    setColumns([]);
    setCsvData([]);
    setMappings({});
    setCustomEntries({});
  };

  const handleSubmit = async () => {
    try {
      const finalMappings = { ...mappings };
      for (const [key, value] of Object.entries(mappings)) {
        if (value === "CUSTOM_ENTRY") {
          finalMappings[key] = customEntries[key] || '';
        }
      }
      await axios.post("http://localhost:5000/api/save-mappings", { 
        mappings: finalMappings, 
        csvData,
        advancedOptions,
        clientId
      });
      console.log("Mappings and data submitted:", finalMappings, csvData, advancedOptions, clientId);
      navigate("/emailler");
    } catch (error) {
      console.error("Error saving mappings and data:", error);
    }
  };

  const FileDisplay = () => (
    <div className="flex items-center space-x-4 mb-6">
      <div className="flex-grow shadow-lg rounded-2xl p-4 flex items-center h-20">
        <div className="bg-[#01C7BE1A] rounded-full p-3 mr-4 rounded-full">
          <img src={csvimg} alt="File" className="h-8 w-8 " />
        </div>
        <div>
          <p className="font-semibold text-base text-gray-700">{file.name}</p>
          <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
        </div>
      </div>
      <button 
        onClick={handleReupload}
        className="bg-green-50 hover:bg-green-100 text-green-700 font-bold py-3 px-4 rounded-2xl inline-flex flex-col items-center justify-center h-20 w-24"
      >
        <RefreshCw className="w-6 h-6 mb-1" />
        <span className="text-sm">Reupload</span>
      </button>
      <button 
        onClick={handleDelete}
        className="bg-red-50 hover:bg-red-100 text-red-700 font-bold py-3 px-4 rounded-2xl inline-flex flex-col items-center justify-center h-20 w-24"
      >
        <Trash2 className="w-6 h-6 mb-1" />
        <span className="text-sm">Delete</span>
      </button>
    </div>
  );

  const CustomCheckbox = ({ checked, onChange, label }) => (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input 
          type="checkbox" 
          className="sr-only" 
          checked={checked}
          onChange={onChange}
        />
        <div 
          className={`w-6 h-6 border-2 rounded-full transition-colors duration-200 ease-in-out ${
            checked 
              ? 'bg-blue-500 border-blue-500' 
              : 'bg-white border-gray-300'
          }`}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-in-out">
          {checked && <Check size={16} color="white" />}
        </div>
      </div>
      <span className="ml-2">{label}</span>
    </label>
  );

  if (!file) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-full max-w-4xl mx-auto px-4 py-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">Add some leads to kick off your process.</h1>
          <p className="text-lg text-[#9CA3AF] mb-8">Upload your CSV files to import leads</p>

          <div
            {...getRootProps()}
            className={`border-4 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-colors bg-[#F2F0FF] h-[450px] w-[800px]
              ${isDragActive
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-indigo-300 hover:border-indigo-500'
              }`}>
            <input {...getInputProps()} />
            <p className="text-2xl font-semibold mb-6 text-gray-800">Upload CSV File</p>
            <img src={Upload} alt="Upload" className="mx-auto mb-12 w-24 h-24" />
            <p className="text-md text-gray-500 mb-12">Choose a file or drag & drop it here</p>
            <button className="bg-transparent text-indigo-600 border-indigo-600 border border-2 px-8 py-3 text-lg rounded-full hover:bg-indigo-50 transition-colors">
              Browse File
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[657px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Uploaded CSV File</h2>
      
      <FileDisplay />

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-1">Client ID (Optional)</label>
        <p className='text-gray-400 mb-8'>
        Leads with a clientID are checked against a global block list before<br /> being added
        </p>
        <select
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-indigo-500 focus:outline-none border-2 focus:ring-indigo-500 sm:text-sm rounded-full"
        >
          <option value="">Please Select Client</option>
          {/* Add client options here */}
        </select>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Map Fields</h3>
        {columns.map((column) => (
          <div key={column} className="flex items-center justify-between py-4">
            <span className="text-sm font-medium text-gray-700">{column}</span>
            <CustomSelect
              value={mappings[column] || ''}
              onChange={handleMappingChange}
              options={options}
              column={column}
              setCustomEntries={setCustomEntries}
            />
            {mappings[column] === "CUSTOM_ENTRY" && (
              <input
                type="text"
                value={customEntries[column] || ''}
                onChange={(e) => setCustomEntries(prev => ({ ...prev, [column]: e.target.value }))}
                placeholder="Enter custom value"
                className="ml-2 mt-1 block w-48 pl-3 pr-3 py-2 text-sm border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-full border-2"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Advanced Lead Import Options</h3>
        {Object.entries(advancedOptions).map(([option, value]) => (
          <div key={option} className="mb-4">
            <CustomCheckbox
              checked={value}
              onChange={() => handleAdvancedOptionChange(option)}
              label={option.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Import Leads
        </button>
      </div>
    </div>
  );
};

export default ImportLeads;