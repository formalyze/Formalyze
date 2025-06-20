import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import CreateFormPage from "./Pages/CreateForm.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-form" element={<CreateFormPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
