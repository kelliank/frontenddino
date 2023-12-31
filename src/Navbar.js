// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assurez-vous que ce fichier est correctement importé

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Dino">Dino</Link>
        </li>
        <li className="nav-item">
          <Link to="/biome">Biome</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Se connecter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
