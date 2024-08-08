import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ModalProvider } from "../Dashboard-pages/Campaigns/components-for-campaign/ModalContext";
import Sidebar from "../../Components/Sidebar/Sidebar";

// Import your dashboard sub-pages here
import Campaigns from "../Dashboard-pages/Campaigns/Campaigns1";
import Accounts from "../Dashboard-pages/Accounts/Accounts";
// ... import other dashboard pages as needed

const DashboardPage = () => {
  return (
    <ModalProvider>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            {/* Redirect to campaigns page by default */}
            <Route
              path="/"
              element={<Navigate to="/dashboard/campaigns" replace />}
            />
            <Route path="campaigns" element={<Campaigns />} />
            <Route path="accounts" element={<Accounts />} />
            {/* Add more routes for other dashboard pages */}
          </Routes>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DashboardPage;