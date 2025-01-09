function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-900 w-full">
      <h1 className="text-5xl font-great-vibes text-white">Event Scheduler</h1>
      <button className="bg-[#CECECE] text-[#1E1E1E] font-bold py-2 px-6 rounded-full hover:bg-[#cbcbcb] focus:outline-none focus:ring-2 focus:ring-blue-500">
        Add Event
      </button>
    </header>
  );
}

export default Header;
