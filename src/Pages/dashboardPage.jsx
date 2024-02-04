import "./dashboardPage.css";
import Dashboard from "../components/dashboard/dashboard";
import SideNavigation from "../components/sideNavigation/sideNavigation";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="grid_container">
      <div className="grid_menu">
        <SideNavigation />
      </div>
      <div className="grid_main">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
