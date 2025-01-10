import { useParams, useNavigate } from "react-router-dom";

function EventDetails({ events, deleteEvent }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === parseInt(id, 10));

  if (!event) {
    return <p className="text-center text-gray-500">Event not found.</p>;
  }

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (isConfirmed) {
      deleteEvent(parseInt(id, 10));
      navigate("/home");
    }
  };
  const handleEdit = () => {
    navigate(`/edit-event/${id}`);
  };
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
      <div className="card bg-base-300 w-1/2 shadow-xl mb-5">
        <figure className="h-[30rem] w-full overflow-hidden">
          <img
            src={event.img}
            alt={event.title}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">{event.title}</h2>
          <p className="text-start">{event.description}</p>
          <p className="text-start">{event.date}</p>
        </div>
        <div className="card-actions flex flex-row justify-end items-end p-4">
          <button onClick={handleEdit} className="btn btn-primary mr-2">
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-secondary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
