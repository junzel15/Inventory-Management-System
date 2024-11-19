// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import inventoryImage from "../assets/inventoryImage.webp";

function LandingPage() {
  const navigate = useNavigate();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [error, setError] = useState("");

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const storedAccounts = localStorage.getItem("accounts");
    if (storedAccounts) {
      setAccounts(JSON.parse(storedAccounts));
    }
  }, []);

  const handleSignInClick = () => {
    setIsSignInModalOpen(true);
  };

  const handleSignUpClick = () => {
    setIsSignUpModalOpen(true);
  };

  const handleModalClose = () => {
    setIsSignInModalOpen(false);
    setIsSignUpModalOpen(false);
    setError("");
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (email && password && role) {
      const newAccount = { email, password, role };
      const updatedAccounts = [...accounts, newAccount];
      setAccounts(updatedAccounts);
      localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
      alert("Account created successfully");
      setIsSignUpModalOpen(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("Admin");
    } else {
      setError("Please fill in all fields.");
    }
  };

  const handleSignInSubmit = () => {
    const account = accounts.find(
      (acc) =>
        acc.email === email && acc.password === password && acc.role === role
    );

    if (account) {
      console.log("Role found:", account.role);
      if (account.role === "Admin") {
        navigate("/admin");
      } else if (account.role === "Staff") {
        navigate("/staff");
      } else if (account.role === "Faculty") {
        navigate("/faculty");
      }
    } else {
      alert("Invalid credentials or account not found.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-600">
      <div className="hidden sm:block sm:flex-1">
        <img
          src={inventoryImage}
          alt="Inventory Management"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-7xl sm:text-7xl font-semibold text-white mb-7 font-poppins">
          <span className="italic">Inventory Management System</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-100 mb-8 font-poppins">
          Streamline your inventory management effortlessly.
        </p>

        <div>
          <button
            onClick={handleSignInClick}
            className="px-6 py-3 mb-4 sm:mr-4 text-white bg-teal-500 rounded-lg shadow-md hover:bg-teal-600 transition duration-200 font-poppins w-full sm:w-auto"
          >
            Sign In
          </button>
          <button
            onClick={handleSignUpClick}
            className="px-6 py-3 text-teal-500 bg-white border border-teal-500 rounded-lg shadow-md hover:bg-teal-100 transition duration-200 font-poppins w-full sm:w-auto"
          >
            Sign Up
          </button>
        </div>
      </div>

      {isSignInModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-semibold text-center text-teal-600 mb-4 font-poppins">
              Sign In
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 font-poppins">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 font-poppins">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 font-poppins">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
                <option value="Faculty">Faculty</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleSignInSubmit}
                className="px-6 py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition duration-200 font-poppins"
              >
                Sign In
              </button>
              <button
                onClick={handleModalClose}
                className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200 font-poppins"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isSignUpModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-semibold text-center text-teal-600 mb-4 font-poppins">
              Create Account
            </h2>
            {error && (
              <p className="text-red-500 text-center mb-4 font-poppins">
                {error}
              </p>
            )}
            <form onSubmit={handleSignUpSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 font-poppins">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 font-poppins">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 font-poppins">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 font-poppins">
                  Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Admin">Admin</option>
                  <option value="Staff">Staff</option>
                  <option value="Faculty">Faculty</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition duration-200 font-poppins"
                >
                  Create Account
                </button>
                <button
                  onClick={handleModalClose}
                  className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200 font-poppins"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
