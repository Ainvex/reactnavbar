// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/main.css';


const Navbar = () => {
  return (
    <>
    <header>
    <nav className="navbar">
      <div className="navbar-container  active">
        <Link to="/" className="navbar-logo">MyApp</Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-item">Home</Link>
          </li>
          <li>
            <Link to="/example" className="navbar-item">UseState</Link>
          </li>
          <li>
            <Link to="/signup" className="navbar-item">Sign Up</Link>
          </li>
          <li>
            <Link to="/login" className="navbar-item">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
    </header>
    </>
  );
};

export default Navbar;