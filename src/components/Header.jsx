import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const handleSignOut = () => {
    localStorage.removeItem("loggedInUser");

    navigate("/");
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-800 w-full cursor-pointer">
      <h1
        onClick={() => {
          navigate("/home");
        }}
        className="text-2xl sm:text-3xl md:text-5xl font-great-vibes text-white"
      >
        Event Scheduler
      </h1>

      <div>
        {isHomePage && (
          <button
            onClick={() => {
              navigate("/create-event");
            }}
            className="bg-[#CECECE] text-[#1E1E1E] font-bold py-2 px-6 rounded-full hover:bg-[#cbcbcb] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Event
          </button>
        )}
        {loggedInUser && (
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500  ml-3"
          >
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
