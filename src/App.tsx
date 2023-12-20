import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Home from './pages/Home';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path="players" element={<Players />} />
        
        </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
