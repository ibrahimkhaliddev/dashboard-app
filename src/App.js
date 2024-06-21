import logo from './logo.svg';
import React, { useState } from "react";
import './App.scss';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import AppsPage from './pages/apps';
import ChangeDomain from './pages/changeDomain';
import Welcome from './pages/register/welcome';
import Register from './pages/register/setAccount';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Business from './pages/Business';
import BusinessDetail from './pages/BusinessDetail';
import TeamsPage from './pages/teams';
import { useEffect } from 'react';
import TeamModal from "./components/switchTeamModal";
import { createContext } from 'react';
import SingleAppPage from './pages/SingleAppPage';


export const switchContext = createContext();

function App() {
  const [isSwitchModalOpen, setisSwitchModalOpen] = useState(false);
  const [loadingLogo, setLoadingLogo] = useState(true);
  const timeout = setTimeout(() => {
    setLoadingLogo(false);
  }, 2020);
  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);
  return (
    < >
      <Router>
        <switchContext.Provider value={[isSwitchModalOpen, setisSwitchModalOpen]}>

          <Sidebar loadingLogo={loadingLogo} />
          <TeamModal />
        </switchContext.Provider>
        <Routes>
          <Route path="/" element={<Dashboard loadingLogo={loadingLogo} />} />
          <Route path="/appsdetail" element={<BusinessDetail />} />
          <Route path="/apps" element={<Business />} />
          <Route path="/singleAppPage" element={<SingleAppPage />} />
          <Route path="/change-domain" element={<ChangeDomain />} />

          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/teams" element={<TeamsPage />} />
        </Routes>


      </Router>
    </>
  );
}

export default App;