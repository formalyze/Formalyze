import React, { useEffect, useState } from "react";

function App() {
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/issue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Test from React UI",
        description: "This issue was sent from the browser",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Show in the BROWSER, not just logs
        setResponseMessage(data.message);
      })
      .catch((err) => {
        setResponseMessage("❌ Could not connect to server");
      });
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1>React → Express → MongoDB</h1>
      <p><strong>Server Response:</strong> {responseMessage}</p>
    </div>
  );
}

export default App;
