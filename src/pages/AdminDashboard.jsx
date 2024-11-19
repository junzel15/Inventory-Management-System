// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import child components
import UserManagement from "../modules/admin/UserManagement";
import InventoryConfig from "../modules/admin/InventoryConfig";
import RequisitionApprovals from "../modules/admin/RequisitionApprovals";
import Reporting from "../modules/admin/Reporting";

// Main Dashboard Component
function AdminDashboard() {
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState(null);

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/"); // Navigate to the home page after logout
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col">
      {/* Header and Logout */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-600">ADMIN DASHBOARD</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Log Out
        </button>
      </div>

      {/* Main Dashboard Layout */}
      <div className="flex flex-1 gap-6">
        {/* Sidebar with Options */}
        <div className="w-1/4 bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-xl font-semibold text-center mb-4">Options</h3>
          <ul className="space-y-6">
            <li>
              <button
                onClick={() => setSelectedContent(<UserManagement />)}
                className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200"
              >
                Manage Users
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedContent(<InventoryConfig />)}
                className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Add to Inventory
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedContent(<RequisitionApprovals />)}
                className="w-full p-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-200"
              >
                Approve Requisitions
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedContent(<Reporting />)}
                className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
              >
                Generate Reports
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-lg">
          {selectedContent || (
            <div className="text-center text-gray-600">
              <h2 className="text-2xl font-semibold">Welcome to the Admin Dashboard</h2>
              <p>Select an option to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
