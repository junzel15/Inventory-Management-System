// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", role: "" });

  // Load users from localStorage on component mount
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Handle adding a new user
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.role) return;

    const updatedUsers = [...users, { id: Date.now(), ...newUser }];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Save to localStorage
    setNewUser({ name: "", role: "" }); // Clear form
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold">Manage Users</h2>

      <form onSubmit={handleAddUser} className="my-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg mr-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg mr-2"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white p-2 rounded-lg">
          Add User
        </button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id} className="border-b py-2">
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
