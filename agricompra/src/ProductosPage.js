import React, { useEffect, useState } from 'react';
import './Productos.css';

function ProductosPage() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('tcp:agricompra.database.windows.net/api/productos')
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
      <h2>Todos los Productos</h2>
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
    </div>
  );
}

export default ProductosPage;