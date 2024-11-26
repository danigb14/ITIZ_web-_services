import React, { useState } from 'react';
import './Productos.css';

function ProductosPage() {
  const [productos] = useState([
    {
      id: 1,
      nombre: "Herramienta de mano",
      descripcion: "Herramienta de mano resistente y versatil, ideal para uso en jardineria o reparaciones ligeras",
      precio: 150.00,
      imagen: "imagen1.jpg"
    },
    {
      id: 2,
      nombre: "Semillas",
      descripcion: "Paquete de semillas seleccionadas, ideal para siembra y jardineria",
      precio: 210.00,
      imagen: "imagen2.jpg"
    },
    {
      id: 3,
      nombre: "Azadon",
      descripcion: "Azadon resistente y de alta calidad, ideal para labores agricolas y jardineria ",
      precio: 245.00,
      imagen: "imagen3.jpg"
    },
    {
      id: 4,
      nombre: "Variedad de semillas",
      descripcion: "Paquete de variedad de semillas, ideal para cultivos y jardines diversos",
      precio: 199.00,
      imagen: "imagen4.jpg"
    },
    {
      id: 5,
      nombre: "Regadera de plantas",
      descripcion: "Regadera ergonomica y duradera, ideal para mantener tus plantas bien hidratadas",
      precio: 300.00,
      imagen: "imagen5.jpg"
    },
    {
      id: 6,
      nombre: "Pesticidas naturales",
      descripcion: "Solucion ecologica para el control de plagas, ideal para proteger cultivos de manera sostenible",
      precio: 180.00,
      imagen: "imagen6.jpg"
    },
    {
      id: 7,
      nombre: "Semillas de girasol",
      descripcion: "Semillas de girasol de alta calidad, ideales para el cultivo o consumo como snak saludable",
      precio: 80.00,
      imagen: "imagen7.jpg"
    },
    {
      id: 8,
      nombre: "Tigeras de cosecha",
      descripcion: "Tigeras ergonomicas para cosecha,ideales para cortes precisos en cultivo y jardineria",
      precio: 249.00,
      imagen: "imagen8.jpg"
    },
    {
      id: 9,
      nombre: "Semillas de Alfalfa",
      descripcion: "Semillas de Alfalfa de alta calidad para siembra",
      precio: 299.00,
      imagen: "imagen9.jpg"
    },
    {
      id: 10,
      nombre: "Costales",
      descripcion: "Costales duraderos y reutilizables ideales para almacenamiento y transporte de productos agricolas",
      precio: 7.27,
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
      nombre: "Semillas de hierbabuena",
      descripcion: "Semillas de hierbabuena ideales para cultivar en casa o en el jardin. Perfectas para infusiones y platillos",
      precio: 435.00,
      imagen: "imagen12.jpg"
    },
    {
      id: 13,
      nombre: "Semillas de Cebollin",
      descripcion: "Semillas de cebollin frescas, perfectas para cultivar en casa o en el jardin, ideal para agregar sabor a ensaldas y platillos.",
      precio: 155.00,
      imagen: "imagen13.jpg"
    },
    {
      id: 14,
      nombre: "Semillas de cilantro",
      descripcion: "Semillas de cilantro de alta calidad, ideales para cultivar en huertos caseros y/o jardines.",
      precio: 250.00,
      imagen: "imagen14.jpg"
    },
    {
      id: 15,
      nombre: "Deshierbador",
      descripcion: "Deshierbador de alta calidad, ideal para remover malesa de jardines y huertos de manera eficiente y comoda",
      precio: 235.00,
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