import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CreateEvent from "./pages/CreateEvent";
import ProtectedLayout from "./components/ProtectedLayout";
import EditEvent from "./pages/EditEvent";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    savedEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
    setEvents(savedEvents);
  }, []);

  const addEvent = (newEvent) => {
    const updatedEvents = [newEvent, ...events];
    updatedEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const deleteEvent = (id) => {
    const updatedEvents = events.filter((e) => e.id !== id);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home events={events} deleteEvent={deleteEvent} />}
          />
          <Route
            path="/event/:id"
            element={<EventDetails events={events} deleteEvent={deleteEvent} />}
          />
          <Route path="/edit-event/:id" element={<EditEvent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route
            path="/create-event"
            element={
              <ProtectedLayout>
                <CreateEvent addEvent={addEvent} />
              </ProtectedLayout>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
