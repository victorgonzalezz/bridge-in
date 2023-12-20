import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Players from './pages/Players';
import Header from './components/Header';
import Games from './pages/Games';
import TeamPlayers from './pages/TeamPlayers';
import Teams from './pages/Teams';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/:id" element={<TeamPlayers />} />
          <Route path="/:id/players/:id" element={<Players />} />
          <Route path="/:id/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
