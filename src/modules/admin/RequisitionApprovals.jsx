// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function RequisitionApprovals() {
  const [requisitions, setRequisitions] = useState([]);
  const [newRequisition, setNewRequisition] = useState({ item: '', requester: '', status: 'Pending' });

  // Load requisitions from localStorage
  useEffect(() => {
    const storedRequisitions = JSON.parse(localStorage.getItem("requisitions")) || [];
    setRequisitions(storedRequisitions);
  }, []);

  const handleApprove = (id) => {
    const updatedRequisitions = requisitions.map((req) =>
      req.id === id ? { ...req, status: 'Approved' } : req
    );
    setRequisitions(updatedRequisitions);
    localStorage.setItem("requisitions", JSON.stringify(updatedRequisitions)); // Save to localStorage
  };

  const handleReject = (id) => {
    const updatedRequisitions = requisitions.map((req) =>
      req.id === id ? { ...req, status: 'Rejected' } : req
    );
    setRequisitions(updatedRequisitions);
    localStorage.setItem("requisitions", JSON.stringify(updatedRequisitions)); // Save to localStorage
  };

  const handleAddRequisition = () => {
    if (!newRequisition.item || !newRequisition.requester) return;
    const updatedRequisitions = [
      ...requisitions,
      { ...newRequisition, id: requisitions.length + 1 }
    ];
    setRequisitions(updatedRequisitions);
    localStorage.setItem("requisitions", JSON.stringify(updatedRequisitions)); // Save to localStorage
    setNewRequisition({ item: '', requester: '', status: 'Pending' });
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-600">Requisition Approvals</h3>
      <p className="mt-2 text-gray-600">Approve or reject requisitions submitted by users.</p>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Item"
          value={newRequisition.item}
          onChange={(e) => setNewRequisition({ ...newRequisition, item: e.target.value })}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Requester"
          value={newRequisition.requester}
          onChange={(e) => setNewRequisition({ ...newRequisition, requester: e.target.value })}
          className="w-full mb-2 p-2 border rounded"
        />
        <button
          onClick={handleAddRequisition}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add Requisition
        </button>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Requisitions</h4>
        <ul className="mt-2">
          {requisitions.length === 0 ? (
            <p className="text-gray-600">No requisitions available.</p>
          ) : (
            requisitions.map((req) => (
              <li key={req.id} className="flex justify-between items-center mb-2">
                <span>{req.item} (Requested by: {req.requester}) - Status: {req.status}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => handleApprove(req.id)}
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(req.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default RequisitionApprovals;
