import React, { useContext } from 'react';
import './MyCart.css'; 
import Vector from '../../assets/images/Vector.png'
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const MyCart = () => {
  const { cart, removeFromCart } = useContext(CartContext); 
  const navigate = useNavigate();

  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);

  const handleRemove = (productToRemove) => {
    removeFromCart(productToRemove);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (

  <div className="cart-section">
      
    <div className="cart-container">
    <div className="cart-header">
         <h2> <span className='backicon'><button onClick={() => navigate('/')}>; <img src={Vector} alt="vector" /> </button></span>My Cart</h2>
      <span>{totalItems} items</span>
    </div>
      {cart.map((product) => (
        <div className="cart-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className="cart-details">
            <h3>{product.title}</h3>
            <div className="price">${(product.price * product.quantity).toFixed(2)}</div>
          </div>
          <div className="cart-actions">
            <div className="quantity-selector">
              <input type="number" value={product.quantity} readOnly />
            </div>
            <button className="remove-button" onClick={() => handleRemove(product)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-footer">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  </div>
);
};


export default MyCart;
