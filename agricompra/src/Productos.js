import React, { useEffect, useState } from 'react';
import './Productos.css';

function Productos() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Semilla de Alfalfa',
      descripcion: 'Semillas de alfalfa de alta calidad para siembra.',
      imagen: 'https://drive.google.com/uc?export=view&id=1AnUHAiq9eZ5QF_LUoIPOGNVwvA-KmL2S',
      precio: 20.00
    },
    {
      id: 2,
      nombre: 'Semilla de Trigo',
      descripcion: 'Semillas de trigo de alta calidad para siembra.',
      imagen: 'https://drive.google.com/uc?export=view&id=1AnUHAiq9eZ5QF_LUoIPOGNVwvA-KmL2S',
      precio: 15.00
    }
  ]);

  useEffect(() => {
    // fetch('http://localhost:5000/api/productos')
    //   .then(response => response.json())
    //   .then(data => setProductos(data))
    //   .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>
                <img src={producto.imagen} alt={producto.nombre} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>${producto.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productos;