import { Link } from "react-router-dom";

function Home() {
  const events = JSON.parse(localStorage.getItem("events")) || [];

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center py-10 w-11/12 mx-auto gap-4 max-w-screen-xl my-6">
      {events.length === 0 ? (
        <p className="text-center text-gray-500">No entries found.</p>
      ) : (
        events.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.id}`}
            className="card bg-base-300 basis-[calc(30%-1.25rem)] min-w-[400px] sm:min-w-[250px] max-w-[500px] shadow-xl self-center"
          >
            <figure className="overflow-hidden">
              <img
                src={event.img}
                alt="Event"
                className="h-[200px] w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title truncate">{event.title}</h2>
              <p>{event.date}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Home;