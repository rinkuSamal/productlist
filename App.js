// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [section, setSection] = useState('productList'); // 'productList' or 'cart'

  return (
    <div className="App">
      <h1>Redux Shopping Cart</h1>
      {section === 'productList' && <ProductList setSection={setSection} />}
      {section === 'cart' && <Cart setSection={setSection} />}
    </div>
  );
}

export default App;
