import React, { useState } from 'react';
import { ChevronDown, MinusCircle, PlusCircle } from 'lucide-react';
import CustomCheckbox from '../Buttons/Custom-checkbox';
import ToggleButton from '../Buttons/toggle-button';
import EmailAccountsPopup from '../Popups/Choose-email-add-campaign';

const EmailCampaignSettings = () => {
  const [dailySendingLimit, setDailySendingLimit] = useState(23);
  const [autoReplyStop, setAutoReplyStop] = useState(false);
  const [linkTracking, setLinkTracking] = useState(true);
  const [isEmailAccountsPopupOpen, setIsEmailAccountsPopupOpen] = useState(false);

  return (
    <>
      <div className="p-6 rounded-lg w-full max-w-3xl mx-auto space-y-12">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold mb-1">Sender Accounts</h2>
              <p className="text-sm text-gray-500">Who is sending this campaign</p>
            </div>
            <div className="flex flex-col items-end">
              <button 
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-full flex items-center text-sm font-bold"
                onClick={() => setIsEmailAccountsPopupOpen(true)}
              >
                Choose Sender Accounts
                
              </button>
              <p className="text-sm text-gray-500 mt-2">0 Selected</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold mb-1">Stop Email Campaign on Reply</h2>
              <p className="text-sm text-gray-500">Discontinue emails to a lead after receiving a reply.</p>
            </div>
            <div className="flex flex-col items-end">
              <ToggleButton />
              <div className="flex items-center mt-4">
                <CustomCheckbox
                  id="autoReplyStop"
                  checked={autoReplyStop}
                  onChange={() => setAutoReplyStop(!autoReplyStop)}
                />
                <label htmlFor="autoReplyStop" className="text-sm font-bold ml-2">Auto-Reply Stop</label>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold mb-1">Open Tracking</h2>
              <p className="text-sm text-gray-500">Email Open Tracking and Monitoring</p>
            </div>
            <div className="flex flex-col items-end">
              <ToggleButton />
              <div className="flex items-center mt-4">
                <CustomCheckbox
                  id="linkTracking"
                  checked={linkTracking}
                  onChange={() => setLinkTracking(!linkTracking)}
                />
                <label htmlFor="linkTracking" className="text-sm font-bold ml-2">Link Tracking</label>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold mb-1">Daily Sending Limit</h2>
              <p className="text-sm text-gray-500">Maximum number of emails to send per day for this campaign</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-indigo-600" onClick={() => setDailySendingLimit(prev => Math.max(0, prev - 1))}>
                <MinusCircle className="w-5 h-5" />
              </button>
              <span className="text-xl font-bold">{dailySendingLimit}</span>
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-indigo-600" onClick={() => setDailySendingLimit(prev => prev + 1)}>
                <PlusCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <EmailAccountsPopup 
        isOpen={isEmailAccountsPopupOpen}
        onClose={() => setIsEmailAccountsPopupOpen(false)}
      />
    </>
  );
};

export default EmailCampaignSettings;