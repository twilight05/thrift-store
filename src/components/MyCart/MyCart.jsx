import React from 'react';
import './MyCart.css';
import tp4 from '../../assets/images/tp4.png';
import tp6 from '../../assets/images/tp6.png';
import tp2 from '../../assets/images/tp2.png';

const cartProducts = [
  { title: 'Product 1', price: '$20.00', image: tp4, quantity: 1 },
  { title: 'Product 2', price: '$25.00', image: tp6, quantity: 1 },
  { title: 'Product 3', price: '$30.00', image: tp2, quantity: 1 },
];

const MyCart = () => {
  return (
    <div className="cart-section">
      <div className="cart-container">
      <h2>My Cart</h2>
      <p>3 Items</p>
        {cartProducts.map((product, index) => (
          <div className="cart-card" key={index}>
            <img src={product.image} alt={product.title} />
            <div className="cart-details">
              <h3>{product.title}</h3>
              <p>Promo</p>
              <button className="remove-button">Remove</button>
                </div>
            <div className="cart-actions">
                <div className="price">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
