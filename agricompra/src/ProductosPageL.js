import React from 'react';
import './ProductosPageL.css';

const productos = [
  { nombre: 'Producto 1', imagen: 'imagen1.jpg', precio: '$10' },
  { nombre: 'Producto 2', imagen: 'imagen2.jpg', precio: '$20' },
  { nombre: 'Producto 3', imagen: 'imagen3.jpg', precio: '$30' },
  { nombre: 'Producto 4', imagen: 'imagen4.jpg', precio: '$40' },
  { nombre: 'Producto 5', imagen: 'imagen5.jpg', precio: '$50' },
  { nombre: 'Producto 6', imagen: 'imagen6.jpg', precio: '$60' },
];

const ProductosPageL = () => {
  return (
    <div className="productos-container">
      <table>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index} className="producto">
              <td>
                <img src={producto.imagen} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <button>Agregar</button>
              </td>
              {(index + 1) % 3 === 0 && <tr />}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductosPageL;