import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import CreateFormPage from "./Pages/CreateForm.jsx";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-form");
  };

  return (
    <div>
      <button onClick={handleClick}>Go to Create Form Page</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-form" element={<CreateFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
