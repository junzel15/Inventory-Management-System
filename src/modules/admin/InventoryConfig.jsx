// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function InventoryConfig() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  // Load categories from localStorage
  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(storedCategories);
  }, []);

  const handleAddCategory = () => {
    if (!newCategory) return;
    const updatedCategories = [...categories, newCategory];
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories)); // Save to localStorage
    setNewCategory(""); // Reset input field
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-600">
        Inventory Configuration
      </h3>
      <p className="mt-2 text-gray-600">
        Configure inventory categories and manage stock levels.
      </p>

      <div className="mt-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Enter new category"
          className="w-full mb-2 p-2 border rounded"
        />
        <button
          onClick={handleAddCategory}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Add Category
        </button>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Categories</h4>
        <ul className="mt-2">
          {categories.length === 0 ? (
            <p className="text-gray-600">No categories available.</p>
          ) : (
            categories.map((category, index) => (
              <li key={index} className="text-gray-600">
                {category}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default InventoryConfig;
