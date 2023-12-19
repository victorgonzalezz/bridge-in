import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-light p-3">
      <ul className="list-unstyled d-flex">
        <li className="me-3"><a href="#">Home</a></li>
        <li className="me-3"><a href="#">About</a></li>
        <li className="me-3"><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
