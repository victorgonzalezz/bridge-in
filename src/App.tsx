import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Games from "./pages/Games";
// import AllPlayers from './pages/AllPlayers';
import Teams from "./components/Teams";
import Home from "./components/Home";
import SpecificTeam from "./pages/SpecificTeam";
import Players from "./components/Players";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* exercicio A */}
          <Route path="/teams" element={<Teams />} />
          {/* exercicio  B*/}
          <Route path="/teams/players" element={<Players />} />

          {/* exercicio  C*/}

          {/* <Route path="/teams/:id/players/:player_id" element={<StatsPlayers />} /> */}

          {/* exercicio  D*/}

          <Route path="/teams/:id" element={<SpecificTeam />} />

          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
