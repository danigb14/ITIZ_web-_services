import React, { useState } from 'react';
import './Productos.css';

function ProductosPage() {
  const [productos] = useState([
    {
      id: 1,
      nombre: "Producto 1",
      descripcion: "Descripción del Producto 1",
      precio: 10.99,
      imagen: "imagen1.jpg"
    },
    {
      id: 2,
      nombre: "Producto 2",
      descripcion: "Descripción del Producto 2",
      precio: 15.49,
      imagen: "imagen2.jpg"
    },
    {
      id: 3,
      nombre: "Producto 3",
      descripcion: "Descripción del Producto 3",
      precio: 7.99,
      imagen: "imagen3.jpg"
    },
    {
      id: 4,
      nombre: "Producto 4",
      descripcion: "Descripción del Producto 4",
      precio: 12.99,
      imagen: "imagen4.jpg"
    },
    {
      id: 5,
      nombre: "Producto 5",
      descripcion: "Descripción del Producto 5",
      precio: 9.99,
      imagen: "imagen5.jpg"
    },
    {
      id: 6,
      nombre: "Producto 6",
      descripcion: "Descripción del Producto 6",
      precio: 14.99,
      imagen: "imagen6.jpg"
    },
    {
      id: 7,
      nombre: "Producto 7",
      descripcion: "Descripción del Producto 7",
      precio: 8.99,
      imagen: "imagen7.jpg"
    },
    {
      id: 8,
      nombre: "Producto 8",
      descripcion: "Descripción del Producto 8",
      precio: 11.99,
      imagen: "imagen8.jpg"
    },
    {
      id: 9,
      nombre: "Producto 9",
      descripcion: "Descripción del Producto 9",
      precio: 13.99,
      imagen: "imagen9.jpg"
    },
    {
      id: 10,
      nombre: "Producto 10",
      descripcion: "Descripción del Producto 10",
      precio: 16.99,
      imagen: "imagen10.jpg"
    },
    {
      id: 11,
      nombre: "Producto 11",
      descripcion: "Descripción del Producto 11",
      precio: 6.99,
      imagen: "imagen11.jpg"
    },
    {
      id: 12,
      nombre: "Producto 12",
      descripcion: "Descripción del Producto 12",
      precio: 5.99,
      imagen: "imagen12.jpg"
    },
    {
      id: 13,
      nombre: "Producto 13",
      descripcion: "Descripción del Producto 13",
      precio: 4.99,
      imagen: "imagen13.jpg"
    },
    {
      id: 14,
      nombre: "Producto 14",
      descripcion: "Descripción del Producto 14",
      precio: 3.99,
      imagen: "imagen14.jpg"
    },
    {
      id: 15,
      nombre: "Producto 15",
      descripcion: "Descripción del Producto 15",
      precio: 2.99,
      imagen: "imagen15.jpg"
    }
  ]);

  const agregarAlCarrito = (producto) => {
    console.log(`Producto agregado al carrito: ${producto.nombre}`);
  };

  return (
    <div>
      <h2>Todos los Productos</h2>
      <div className="product-grid">
        {productos.map(producto => (
          <div className="product-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductosPage;