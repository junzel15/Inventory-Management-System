// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StaffDashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false);
  };

  const handleOptionClick = (option) => {
    console.log(`${option} clicked`);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50 flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 text-center">
          <h2 className="text-3xl font-semibold text-green-600">Staff Dashboard</h2>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Log Out
        </button>
      </div>

      <div className="flex flex-1">
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Options</h3>
          <ul className="space-y-4">
            <li>
              <div>
                <h4 className="text-green-600 font-bold">Track Stock Levels</h4>
                <p className="text-gray-700">Monitor inventory status and update stock levels</p>
                <button
                  onClick={() => handleOptionClick("Track Stock Levels")}
                  className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Go to Stock Levels
                </button>
              </div>
            </li>
            <li>
              <div>
                <h4 className="text-green-600 font-bold">Requisition Submissions</h4>
                <p className="text-gray-700">Submit requisitions for supplies or equipment</p>
                <button
                  onClick={() => handleOptionClick("Requisition Submissions")}
                  className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Submit Requisition
                </button>
              </div>
            </li>
            <li>
              <div>
                <h4 className="text-green-600 font-bold">Stock Audits</h4>
                <p className="text-gray-700">Conduct inventory audits and update stock records</p>
                <button
                  onClick={() => handleOptionClick("Stock Audits")}
                  className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Go to Stock Audits
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 bg-white rounded-lg shadow-lg ml-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Selected Content</h3>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Are you sure you want to log out?</h3>
            <div className="flex justify-between">
              <button
                onClick={handleConfirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Yes
              </button>
              <button
                onClick={handleCancelLogout}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StaffDashboard;
