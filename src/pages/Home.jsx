import { Link, useNavigate } from "react-router-dom";

function Home({ events, deleteEvent }) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-row items-start py-10">
      <div className="w-full flex justify-end mb-4">
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md"
        >
          Sign Out
        </button>
      </div>
      {events.length === 0 ? (
        <p className="text-center text-gray-500">No entries found.</p>
      ) : (
        events.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.id}`}
            className="card bg-base-300 w-3/12 shadow-xl mb-5 m-4"
          >
            <figure>
              <img src={event.img} alt="Event" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{event.title}</h2>
              <p>{event.date}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Home;
