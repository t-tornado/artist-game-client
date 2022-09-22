import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppBackground, AppLogo } from "./components";
import "./index.css";
import { GamePage } from "./pages/game";
import { Scoreboard } from "./pages/scoreboard";

const App: React.FC = () => {
  return (
    <Router>
      <AppBackground className="pt-5 px-10">
        <header>
          <AppLogo />
        </header>
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
      </AppBackground>
    </Router>
  );
};

export default App;
