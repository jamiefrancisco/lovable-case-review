import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import CasesList from "./pages/CasesList";
import CaseDetail from "./pages/CaseDetail";
import About from "./pages/About";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/cases" replace />} />
        <Route path="/cases" element={<CasesList />} />
        <Route path="/cases/:id" element={<CaseDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
);


