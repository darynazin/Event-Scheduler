import { Link, useNavigate } from "react-router-dom";

const events = JSON.parse(localStorage.getItem("events")) || [];

function Home() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-row items-start py-10">
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
