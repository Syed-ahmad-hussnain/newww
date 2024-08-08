import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import iconclose from '../../assets/Icons/icon-close.png'

const CampaignSettingsPopup = ({ isOpen, onClose }) => {
  const [emailDeliveryPriority, setEmailDeliveryPriority] = useState(50);
  const [dontTrackEmailOpens, setDontTrackEmailOpens] = useState(false);
  const [dontTrackLinkClicks, setDontTrackLinkClicks] = useState(false);
  const [autoPauseOnDomainReply, setAutoPauseOnDomainReply] = useState(false);
  const [sendPlainTextEmails, setSendPlainTextEmails] = useState(false);
  const [activateAutoPauseProtection, setActivateAutoPauseProtection] = useState(false);
  const [autoOptimizeEmailProvider, setAutoOptimizeEmailProvider] = useState(false);
  const [aiCategories, setAiCategories] = useState('none');
  const [addUnsubscribeMessage, setAddUnsubscribeMessage] = useState(false);

  if (!isOpen) return null;

  const CustomCheckbox = ({ checked, onChange, label }) => (
    <label className="flex items-center">
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
        <div className="absolute inset-0 flex items-center justify-center transition-colors duration-200 ease-in-out">
          <Check size={16} color={checked ? 'white' : '#9CA3AF'} />
        </div>
      </div>
      <span className="ml-2">{label}</span>
    </label>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div 
        className="bg-white rounded-[32px] p-7 overflow-y-auto scrollbar-hide"
        style={{
          width: '700px',
          height: '90vh',
          maxHeight: '900px',
          gap: '12px',
          opacity: 1,
        }}
      >
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-3xl font-bold">Campaign Settings</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 h-[10px] ">
            <img src={iconclose} />
          </button>
        </div>

        <div className="space-y-3">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg mb-2">Email Accounts</h3>
            <p className="text-sm text-gray-600 mb-2">What should we avoid tracking?</p>
            <div className="space-y-2">
              <CustomCheckbox 
                checked={dontTrackEmailOpens} 
                onChange={(e) => setDontTrackEmailOpens(e.target.checked)}
                label="DON'T track email opens"
              />
              <CustomCheckbox 
                checked={dontTrackLinkClicks} 
                onChange={(e) => setDontTrackLinkClicks(e.target.checked)}
                label="DON'T track link clicks"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg mb-2">Company Level Auto-Pause</h3>
            <p className="text-sm text-gray-600 mb-2">Stop messaging other people within a company once a person replies from that company.</p>
            <CustomCheckbox 
              checked={autoPauseOnDomainReply} 
              onChange={(e) => setAutoPauseOnDomainReply(e.target.checked)}
              label="Auto-pause if one of the leads from the same domain replies"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg mb-2">Optimize Email Delivery</h3>
            <CustomCheckbox 
              checked={sendPlainTextEmails} 
              onChange={(e) => setSendPlainTextEmails(e.target.checked)}
              label="Boost your deliverability by sending emails in plain text, without HTML"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg mb-2">High Bounce Rate Auto-Protection</h3>
            <p className="text-sm text-gray-600 mb-2">Protect your mailbox reputation with auto-pause on high bounce rates</p>
            <CustomCheckbox 
              checked={activateAutoPauseProtection} 
              onChange={(e) => setActivateAutoPauseProtection(e.target.checked)}
              label="Activate auto-pause protection from bounces"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg mb-2">Enhanced Email Sending & Delivery</h3>
            <p className="text-sm text-gray-600 mb-2">AI-optimized for your leads across providers + Your mailbox providers for boosted deliverability (Direct or Gmail Outlook to Office)</p>
            <CustomCheckbox 
              checked={autoOptimizeEmailProvider} 
              onChange={(e) => setAutoOptimizeEmailProvider(e.target.checked)}
              label="Auto-optimize Email Provider and Services"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg mb-2">Enhanced Email Sending & Delivery</h3>
            <p className="text-sm text-gray-600 mb-2">Decide how much priority needs to be given to follow ups vs new leads</p>
            <input
              type="range"
              min="0"
              max="100"
              value={emailDeliveryPriority}
              onChange={(e) => setEmailDeliveryPriority(e.target.value)}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>New Leads</span>
              <span>Follow Ups</span>
            </div>
            <div className="text-center text-sm text-purple-600 mt-2">
              {emailDeliveryPriority}% Follow up &gt; {100 - emailDeliveryPriority}% new leads
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg mb-2">Intelligent AI Lead Categorizations</h3>
            <p className="text-sm text-gray-600 mb-2">Our Machine Learning Engine will auto-categorize replies.</p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="aiCategories" 
                  value="none"
                  checked={aiCategories === 'none'}
                  onChange={(e) => setAiCategories(e.target.value)}
                  className="mr-2" 
                />
                <span>Don't categorize lead with AI</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="aiCategories" 
                  value="primary"
                  checked={aiCategories === 'primary'}
                  onChange={(e) => setAiCategories(e.target.value)}
                  className="mr-2" 
                />
                <span>Intelli-categorize replies using Primary box AI</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="radio" 
                  name="aiCategories" 
                  value="custom"
                  checked={aiCategories === 'custom'}
                  onChange={(e) => setAiCategories(e.target.value)}
                  className="mr-2" 
                />
                <span>Write your own prompt to categorize lead through AI</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg mb-2">Unsubscribe</h3>
            <CustomCheckbox 
              checked={addUnsubscribeMessage} 
              onChange={(e) => setAddUnsubscribeMessage(e.target.checked)}
              label="Add unsubscribe message in all emails"
            />
          </div>
        </div>

        <button 
          onClick={onClose} 
          className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition duration-200 mt-6"
        >
          Save Setting
        </button>
      </div>
    </div>
  );
};

export default CampaignSettingsPopup;