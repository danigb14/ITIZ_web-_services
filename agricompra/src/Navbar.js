import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          Agricompra
        </Link>
      </div>
      <div className="navbar-right">
                <Link to="/Productos">Productos</Link>
        <a href="#carrito">Carrito</a>
        <a href="#inicio-sesion">Inicio de sesión</a>
      </div>
    </nav>
  );
}

export default Navbar;