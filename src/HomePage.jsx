import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [backendMessage, setBackendMessage] = useState("Loading...");
  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/ping")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.text();
      })
      .then((data) => setBackendMessage(data))
      .catch((err) => {
        console.error("Error fetching from backend:", err);
        setBackendMessage("Error connecting to backend");
      });
  }, []);

  const handleSendUser = () => {
    fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Nipun",
        email: "nipun@example.com"
      })
    })
      .then((res) => res.text())
      .then((data) => {
        setResponseMessage(data);
      })
      .catch((err) => {
        console.error("Error sending user:", err);
        setResponseMessage("Failed to send user");
      });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Backend says: {backendMessage}</p>
      <button onClick={handleSendUser}>Send User to DB</button>
      <p>{responseMessage}</p>
      <button onClick={() => navigate("/create-form")}>
        Go to Create Form Page
      </button>
    </div>
  );
}

export default HomePage;