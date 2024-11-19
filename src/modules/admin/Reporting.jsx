// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function Reporting() {
  const [selectedReport, setSelectedReport] = useState("Inventory");

  // Load selected report from localStorage
  useEffect(() => {
    const storedReport = localStorage.getItem("selectedReport");
    if (storedReport) {
      setSelectedReport(storedReport);
    }
  }, []);

  const handleChangeReport = (e) => {
    const report = e.target.value;
    setSelectedReport(report);
    localStorage.setItem("selectedReport", report); // Save to localStorage
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-600">Reporting</h3>
      <p className="mt-2 text-gray-600">
        Generate various reports based on system data.
      </p>

      <div className="mt-4">
        <select
          value={selectedReport}
          onChange={handleChangeReport}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="Inventory">Inventory Report</option>
          <option value="Users">User Management Report</option>
          <option value="Requisitions">Requisition Report</option>
        </select>

        <div className="p-4 bg-gray-100 rounded">
          <h4 className="font-semibold text-gray-700">Generated Report: {selectedReport}</h4>
          <p className="text-gray-600">Content for {selectedReport} will appear here.</p>
        </div>
      </div>
    </div>
  );
}

export default Reporting;
