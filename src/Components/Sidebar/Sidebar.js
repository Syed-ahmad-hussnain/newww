import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Import logo
import logo from '../../assets/Images/Brand-Logo-gradient.png';
// Import custom icons
import campaignsIcon from '../../assets/Icons/icon-campaign-selected.png';
import accountsIcon from '../../assets/Icons/icon-email-selected.png';
import inboxIcon from '../../assets/Icons/icon-master--selected.png';
import clientAccessIcon from '../../assets/Icons/icon-client-access-selected.png';
import integrationIcon from '../../assets/Icons/icon-integration-selected.png';
import leadManagementIcon from '../../assets/Icons/icon-lead-management-selected.png';
import analyticsIcon from '../../assets/Icons/icon-global-analytic-selected.png';
import helpIcon from '../../assets/Icons/icon-help-selected.png';
import settingsIcon from '../../assets/Icons/icon-setting-selected.png';

const SidebarItem = ({ icon, text, to, collapsed }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center p-3 my-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out
      ${isActive 
        ? 'bg-custom-blue text-white' 
        : 'text-gray-600 hover:bg-blue-50'
      } 
      ${collapsed ? 'w-14 h-14 mx-auto justify-center' : 'mx-4'}`
    }
  >
    {({ isActive }) => (
      <>
        <img 
          src={icon} 
          alt={text} 
          className={`w-6 h-6 ${isActive ? 'filter brightness-0 invert' : ''}`} 
        />
        {!collapsed && <span className="ml-3 text-sm select-none">{text}</span>}
      </>
    )}
  </NavLink>
);

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: campaignsIcon, text: "Campaigns", to: "/dashboard/campaigns" },
    { icon: accountsIcon, text: "Accounts", to: "/dashboard/accounts" },
    { icon: inboxIcon, text: "Master Inbox", to: "/dashboard/inbox" },
    { icon: clientAccessIcon, text: "Client Access", to: "/dashboard/clients" },
    { icon: integrationIcon, text: "Integration", to: "/dashboard/integration" },
    { icon: leadManagementIcon, text: "Lead Management", to: "/dashboard/leads" },
    { icon: analyticsIcon, text: "Global Analytics", to: "/dashboard/analytics" },
  ];

  return (
    <div className="relative z-10"> {/* Added z-50 to increase z-index */}
      <div 
        className={`h-screen bg-white flex flex-col transition-all duration-300 ease-in-out select-none
        ${collapsed ? 'w-20' : 'w-64'}
        shadow-[4px_0_6px_-1px_rgba(0,0,0,0.1)]`}
      >
        <div className={`flex flex-col items-center p-4 ${collapsed ? 'justify-center' : 'items-start'}`}>
          <div className={`flex items-center justify-center ${collapsed ? 'w-16 h-16' : 'w-20 h-20'}`}>
            <img src={logo} alt="Logo" className={`${collapsed ? 'w-14 h-14' : 'w-18 h-18'} pointer-events-none`} />
          </div>
          {!collapsed && (
            <span className="mt-2 text-xl font-semibold text-custom-blue whitespace-nowrap select-none">
              Primary Inbox
            </span>
          )}
        </div>
        
        <nav className="flex-1 overflow-y-auto mt-4">
          {menuItems.map((item) => (
            <SidebarItem 
              key={item.text}
              icon={item.icon} 
              text={item.text} 
              to={item.to}
              collapsed={collapsed}
            />
          ))}
        </nav>
        
        <div className="mt-auto mb-4">
          <SidebarItem icon={helpIcon} text="Help & Support" to="/dashboard/support" collapsed={collapsed} />
          <SidebarItem icon={settingsIcon} text="Setting" to="/dashboard/settings" collapsed={collapsed} />
        </div>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-4 -right-3 w-6 h-6 rounded-full bg-custom-blue text-white flex items-center justify-center shadow-md select-none"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </div>
  );
};

export default Sidebar;