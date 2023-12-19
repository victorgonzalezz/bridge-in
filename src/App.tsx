import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <MainContent />
    </div>
  );
};

export default App;
