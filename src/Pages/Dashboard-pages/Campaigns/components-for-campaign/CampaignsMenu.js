import React, { useEffect, useRef, useState } from 'react';
import { Pencil, Users, Tag, Copy, Archive, Trash2 } from 'lucide-react';
import RenamePopup from './Renamepopup';  // Import the separate RenamePopup component

const CampaignOptionsMenu = ({ isOpen, onClose, onOptionSelect, campaignName, onCampaignRename }) => {
  const menuRef = useRef(null);
  const [position, setPosition] = useState('bottom');
  const [isRenamePopupOpen, setIsRenamePopupOpen] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      if (menuRef.current) {
        const rect = menuRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        const menuHeight = rect.height;

        setPosition(spaceBelow < menuHeight && spaceAbove > spaceBelow ? 'top' : 'bottom');
      }
    };

    if (isOpen) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
    }

    return () => window.removeEventListener('resize', updatePosition);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const options = [
    { icon: <Pencil size={20} />, label: 'Rename Campaign', action: 'rename' },
    { icon: <Users size={20} />, label: 'Update Client Information', action: 'updateClient' },
    { icon: <Tag size={20} />, label: 'Assign Tag', action: 'assignTag' },
    { icon: <Copy size={20} />, label: 'Clone Campaign', action: 'clone' },
    { icon: <Archive size={20} />, label: 'Archive Campaign', action: 'archive' },
    { icon: <Trash2 className='text-red-500' size={20} />, label: 'Delete Campaign', action: 'delete' },
  ];

  const handleOptionSelect = (action) => {
    if (action === 'rename') {
      setIsRenamePopupOpen(true);
    } else {
      onOptionSelect(action);
      onClose();
    }
  };

  const handleRename = (newName) => {
    onCampaignRename(newName);
    setIsRenamePopupOpen(false);
    onClose();
  };

  return (
    <>
      <div 
        ref={menuRef}
        className={`absolute ${position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'} right-0 w-64 bg-white z-10
                    shadow-lg rounded-md border border-gray-200`}
      >
        <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {options.map((option) => (
            <button
              key={option.action}
              className={`
                flex items-center w-full px-4 py-3 text-sm
                ${option.action === 'delete' ? 'text-red-600' : 'text-gray-700'}
                hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out
              `}
              role="menuitem"
              onClick={() => handleOptionSelect(option.action)}
            >
              <span className="mr-3 text-gray-400">{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <RenamePopup
        isOpen={isRenamePopupOpen}
        onClose={() => setIsRenamePopupOpen(false)}
        onRename={handleRename}
        currentName={campaignName}
      />
    </>
  );
};

export default CampaignOptionsMenu;