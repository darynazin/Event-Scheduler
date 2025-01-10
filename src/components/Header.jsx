import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const handleSignOut = () => {
    localStorage.removeItem("loggedInUser");

    navigate("/signin");
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-900 w-full">
      <h1 className="text-5xl font-great-vibes text-white">Event Scheduler</h1>

      <div className="flex items-center space-x-4">
        <button className="bg-[#CECECE] text-[#1E1E1E] font-bold py-2 px-6 rounded-full hover:bg-[#cbcbcb] focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add Event
        </button>

        {loggedInUser ? (
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/signin"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
