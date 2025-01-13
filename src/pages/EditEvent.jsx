import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditEvent({ events, setEvents }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === parseInt(id, 10));

  const [img, setImg] = useState(event?.img || "");
  const [title, setTitle] = useState(event?.title || "");
  const [description, setDescription] = useState(event?.description || "");
  const [date, setDate] = useState(event?.date || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvents = events.map((e) =>
      e.id === parseInt(id, 10) ? { ...e, img, title, description, date } : e
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    navigate(`/event/${id}`);
  };

  return (
    <div className="container mx-auto p-4 w-1/3 mt-16">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Edit Event
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white">
            Image URL
          </label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="mt-1 p-2 block w-full border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 block w-full border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 block w-full border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 p-2 block w-full border rounded"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEvent;