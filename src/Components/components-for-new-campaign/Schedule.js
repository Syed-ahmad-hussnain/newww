import React, { useState } from 'react';
import { Calendar, Clock, Plus, Minus, Copy } from 'lucide-react';

const ScheduleSettings = () => {
  const [timeZone, setTimeZone] = useState('UTC+05:00');
  const [startDate, setStartDate] = useState('Wednesday, Aug 7, 2024');
  const [endDate, setEndDate] = useState('');

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="w-[700px] p-6 bg-white rounded-lg ">
      <h1 className="text-2xl font-bold mb-6">Schedule Settings</h1>
      
      {/* Time Zone Selection */}
      <div className="mb-6">
        <h2 className="text-sm text-gray-500 mb-2">Choose Time Zone</h2>
        <div className="relative">
          <select
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
          >
            <option>This is UTC+05:00</option>
            {/* Add more time zone options here */}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Campaign Timeline Setup */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Campaign Timeline Setup</h2>
        <p className="text-sm text-gray-500 mb-4">Specify the start and end dates for your campaign</p>
        <div className="flex space-x-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border rounded-md pr-10"
                placeholder="Starting Date"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500" size={20} />
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 border rounded-md pr-10"
                placeholder="Ending Date"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Sequence Interval Timing */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Sequence Interval Timing</h2>
        <p className="text-sm text-gray-500 mb-4">Establish the time frame for each sequence</p>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="pb-2">Days</th>
              <th className="pb-2">From</th>
              <th className="pb-2">To</th>
              <th className="pb-2">Recurring</th>
              <th className="pb-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day}>
                <td className="py-2">{day}</td>
                <td className="py-2">4 pm</td>
                <td className="py-2">8 pm</td>
                <td className="py-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                    20 Minutes
                  </span>
                </td>
                <td className="py-2">
                  <div className="flex space-x-2">
                    <button className="p-1 rounded-full bg-red-100 text-red-600">
                      <Minus size={16} />
                    </button>
                    <button className="p-1 rounded-full bg-green-100 text-green-600">
                      <Plus size={16} />
                    </button>
                    <button className="p-1 rounded-full bg-gray-100 text-gray-600">
                      <Copy size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleSettings;