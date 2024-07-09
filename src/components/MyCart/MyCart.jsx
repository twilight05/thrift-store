import React, { useContext } from 'react';
import './MyCart.css'; 
import Vector from '../../assets/images/Vector.png'
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const MyCart = ({func}) => {
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

  const handleHome = () => {
    navigate('/trending'); // Use navigate to redirect to the homepage
  };

  return (

  <div className="cart-section">
    <div className="cart-container">
      <div className="cart-header">
          <span className='backicon'>
            <button onClick={func}>
            <img src={Vector} alt="vector" /> 
            </button>
            </span>
          <h2>My Cart</h2>
         <span>{totalItems} items</span>
      </div>
        {cart.map((product) => (
        <div className="cart-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className="cart-details">
          
            <h3>{product.title}</h3>
            <button className="remove-button" onClick={() => handleRemove(product)}>Remove</button>
           
          </div>
          <div className="cart-actions">         
          <div className="price">₦{product.price}</div>
          </div>
        </div>
        ))}
       <div className="cart-footer">
        <h3>Total: ₦{totalPrice.toFixed(2)}</h3>
        <div>
        <Button text='Continue Shopping'className="checkout-button" onClick={handleHome}></Button>

        <Button text='Checkout' className="checkout-button" onClick={handleCheckout}></Button>
        </div>
        
      </div>
    </div>
  </div>
);
};


export default MyCart;
