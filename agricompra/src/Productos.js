import React, { useEffect, useState } from 'react';
import './Productos.css';

function Productos() {
  const [productos, setProductos] = useState([
    {
        "nombre": "Producto 1",
        "precio": 10.99,
        "imagen": "imagen1.jpg"
    },
    {
        "nombre": "Producto 2",
        "precio": 15.49,
        "imagen": "imagen2.jpg"
    },
    {
        "nombre": "Producto 3",
        "precio": 7.99,
        "imagen": "imagen3.jpg"
    }
  ]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('tcp:agricompra.database.windows.net/api/productos,1433')
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

  return (
    <div>
      <h2>Productos</h2>
      {error && <p className="error">{error}</p>}
      <div className="product-grid">
        {productos.map(producto => (
          <div className="product-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
          </div>
        ))}
      </div>
      <a href="/productos" className="view-all-button">Ver todos los productos</a>
    </div>
  );
}

export default Productos;