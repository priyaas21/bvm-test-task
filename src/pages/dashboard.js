import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="detail-section">Main Cosdfntent Goes Here</div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
