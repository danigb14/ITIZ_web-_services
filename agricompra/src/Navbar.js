import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import './Navbar.css';

const clientId = '429358795134-k6uvsgsr42f345ikfqv4jlip38mfngkf.apps.googleusercontent.com';

function Navbar() {
  const [user, setUser] = useState(null);

  const onSuccess = (response) => {
    console.log('Login Success: currentUser:', response.profileObj);
    setUser(response.profileObj);
  };

  const onFailure = (response) => {
    console.log('Login failed: res:', response);
    setUser(null);
  };

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
        {user ? (
          <div>
            <span>Bienvenido, {user.name}</span>
            <img src={user.imageUrl} alt={user.name} className="user-image" />
          </div>
        ) : (
          <GoogleLogin
            clientId={clientId}
            buttonText="Inicio de sesión con Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            className="custom-google-button" // Aplica la clase personalizada
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;