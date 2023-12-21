// src/components/ProductList.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import './ProductList.css'; // Import the stylesheet
import Cart from './Cart'; // Import the Cart component

const ProductList = ({ dispatch, cart }) => {
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
  });
  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      id: 'Enter id',
      name: '',
      description: '',
      price: 0,
      image: '',
    });
    setShowModal(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list-container">
      <button className="add-product-button" onClick={() => setShowModal(true)}>
        Add Product
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Product</h3>
            <form>

            <label>Id:</label>
              <input type="text" name="id"  onChange={handleInputChange} />

              <label>Name:</label>
              <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />

              <label>Description:</label>
              <textarea name="description" value={newProduct.description} onChange={handleInputChange} />

              <label>Price:</label>
              <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} />

              <label>Image URL:</label>
              <input type="text" name="image" value={newProduct.image} onChange={handleInputChange} />

              <button type="button" onClick={handleAddProduct}>
                Add Product
              </button>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="product-list">
        <div className="product-header">
          <span>Product Name</span>
          <span>Product Image</span>
          <span>Product Price</span>
          <span>Action</span>
        </div>
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <span>{product.name}</span>
            <img src={product.image} alt={product.name} />
            <span>${product.price}</span>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Display the Cart component */}
      <Cart />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(ProductList);
