import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CreateEvent from "./pages/CreateEvent";
import ProtectedLayout from "./components/ProtectedLayout";
import EditEvent from "./pages/EditEvent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/edit-event/:id" element={<EditEvent />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/create-event"
          element={
            <ProtectedLayout>
              <CreateEvent />
            </ProtectedLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
