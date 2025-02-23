import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEvent({ addEvent }) {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let id;

    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];

    if (existingEvents.length === 0) {
      id = 1;
    } else {
      const maxId = Math.max(...existingEvents.map((item) => item.id));
      id = maxId + 1;
    }

    const event = { id, img, title, description, date };

    const updatedEvents = [...existingEvents, event];

    localStorage.setItem("events", JSON.stringify(updatedEvents));

    addEvent(event);
    navigate("/home");
  };

  return (
    <div className="container mx-auto p-4 w-1/3 mt-16">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Create Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white">Image URL</label>
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
          <label className="block text-sm font-medium text-white">Description</label>
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
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;