import React, { useEffect, useState } from 'react';

const RenamePopup = ({ isOpen, onClose, onRename, currentName = '' }) => {
  const [newName, setNewName] = useState(currentName || '');

  useEffect(() => {
    setNewName(currentName || '');
  }, [currentName, isOpen]);

  if (!isOpen) return null;

  const handleRename = () => {
    const trimmedName = newName.trim();
    if (trimmedName !== '') {
      onRename(trimmedName);
    }
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-96" onClick={handleContentClick}>
        <h2 className="text-xl font-semibold mb-4">Rename Campaign</h2>
        <div className="mb-4">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter new campaign name"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            onClick={handleRename}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={newName.trim() === ''}
          >
            Rename
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenamePopup;