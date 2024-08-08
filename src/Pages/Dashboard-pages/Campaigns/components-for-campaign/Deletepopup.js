import React from 'react';

const DeletePopup = ({ confirmDelete, cancelDelete, campaignName }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Delete {campaignName ? 'Campaign' : 'Campaigns'}</h2>
      <p className="mb-6">
        {campaignName 
          ? `Are you sure you want to delete the campaign "${campaignName}"?` 
          : 'Are you sure you want to delete the selected campaigns?'}
      </p>
      <div className="flex justify-end space-x-4">
        <button
          onClick={cancelDelete}
          className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition duration-300"
        >
          Cancel
        </button>
        <button
          onClick={confirmDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default DeletePopup;