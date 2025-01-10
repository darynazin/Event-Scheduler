import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedLayout({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // if (!token) {
    //   navigate('/');
    // }
  }, [navigate]);

  return <div>{children}</div>;
}

export default ProtectedLayout;
