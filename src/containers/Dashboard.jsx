import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [toggleNotification, setToggleNotification] = useState(false);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
