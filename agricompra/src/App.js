import React from 'react';
import './App.css';
import Carousel from './Carousel';
import Productos from './Productos';

function App() {
  return (
    <div className="App">
      <Carousel />
      <div className="product-list">
        <Productos />
      </div>
    </div>
  );
}

export default App;
