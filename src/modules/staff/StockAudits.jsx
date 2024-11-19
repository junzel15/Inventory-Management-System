// eslint-disable-next-line no-unused-vars
import React from 'react';

function StockAudits() {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-green-600">Stock Audits</h3>
      <p className="mt-2 text-gray-600">Perform regular inventory audits and record findings.</p>
      <button className="px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600">Start Audit</button>
    </div>
  );
}

export default StockAudits;
