import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedLayout({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      navigate("/");
    }
  }, [navigate]);

  return <div>{children}</div>;
}

export default ProtectedLayout;