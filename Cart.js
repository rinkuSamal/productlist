// // src/components/Cart.js
// import React from 'react';
// import { connect } from 'react-redux';
// import { removeFromCart } from '../actions';
// import './Cart.css'; 

// const Cart = ({ cart, removeFromCart }) => {
//   const handleRemoveFromCart = (product) => {
//     removeFromCart(product.id); // Assuming my payload for REMOVE_FROM_CART is the product ID
//   };


//   const handleDeleteCart = () => {
//     deleteCart();
//   };

//   return (
//     <div className="cart-container">
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <table className="cart-table">
//           <thead>
//             <tr>
//               <th>Product Name</th>
//               <th>Product Image</th>
//               <th>Price</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.name}</td>
//                 <td>
//                   <img src={item.image} alt={item.name} />
//                 </td>
//                 <td>${item.price}</td>
//                 <td>
//                   <button className="remove-button" onClick={() => handleRemoveFromCart(item)}>
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       <button className="delete-cart-button" onClick={handleDeleteCart}>
//         Delete Cart
//       </button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   cart: state.cart,
// });

// const mapDispatchToProps = (dispatch) => ({
//   removeFromCart: (productId) => dispatch(removeFromCart(productId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Cart);
// src/components/Cart.js
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, deleteCart } from '../actions';
import './Cart.css';

const Cart = ({ cart, removeFromCart, deleteCart }) => {
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleDeleteCart = () => {
    deleteCart();
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} alt={item.name} />
                </td>
                <td>${item.price}</td>
                <td>
                  <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="delete-cart-button" onClick={handleDeleteCart}>
        Delete Cart
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (productId) => dispatch(removeFromCart(productId)),
  deleteCart: () => dispatch(deleteCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
