import React, { useEffect, useState } from 'react';
import './Productos.css';

function ProductosPage() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/productos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProductos(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    console.log(`Producto agregado al carrito: ${producto.Nombre}`);
  };

  return (
    <div>
      <h2>Todos los Productos</h2>
      {error && <p className="error">{error}</p>}
      <div className="product-grid">
        {productos.map(producto => (
          <div className="product-card" key={producto.ID}>
            <img src={producto.ImagenURL} alt={producto.Nombre} />
            <h2>{producto.Nombre}</h2>
            <p>{producto.Descripcion}</p>
            <p>Precio: ${producto.Precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosPage;