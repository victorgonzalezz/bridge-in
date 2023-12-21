import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Players from './pages/Players';
import Header from './components/Header';
import Games from './pages/Games';
// import AllPlayers from './pages/AllPlayers';
import Teams from './pages/Teams';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/:id/players/:id" element={<Players />} />
          <Route path="/games" element={<Games />} />
          {/* <Route path="/:id" element={<AllPlayers />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
