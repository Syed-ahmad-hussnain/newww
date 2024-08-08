import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fontsource/poppins';
import './App.css';
import SignInPage from './Pages/SignIn/SignIn';
import LandingPage from './Pages/Main_landing_page/Landing_Page';
import DashboardPage from './Pages/Dashboard/Dashboard';
import CampaignsPage from './Pages/Dashboard-pages/Campaigns/Campaigns1';
import AddNewCampaign from './Pages/Campaign-addnew'; // Import the new component

function App() {
  return (
    <Router>
      <div className='font-poppins'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/dashboard/*" element={<DashboardPage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/campaigns/add-new" element={<AddNewCampaign />} /> // Add this new route
        </Routes>
      </div>
    </Router>
  );
}

export default App;