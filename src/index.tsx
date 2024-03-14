import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import GameBoard from "./pages/gamePlay/GameBoard";
import HomePage from "./pages/homePage/HomePage";
import Winner from "./pages/winner/Winner";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/game-over" element={<Winner />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
