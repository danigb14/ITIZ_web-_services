import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#inicio">
          Agricompra
        </a>
      </div>
      <div className="navbar-right">
        <a href="#productos">Productos</a>
        <a href="#carrito">Carrito</a>
        <a href="#inicio-sesion">Inicio de sesión</a>
      </div>
    </nav>
  );
}

export default Navbar;