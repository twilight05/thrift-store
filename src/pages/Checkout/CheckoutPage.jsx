import React, { useContext } from 'react';
import './Checkout.css'; // Import CSS file for Checkout component
import { CartContext } from '../../contexts/CartContext';
import PaymentPage from '../Paymentpage/PaymentPage'; // Import the PaymentPage component

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handlePaymentSubmit = (paymentData) => {
    // Handle payment submission logic here (e.g., API calls, state updates)
    console.log('Payment details:', paymentData);
    // You can add further logic for payment processing
  };

  return (
    <div className="checkout-section">
      <div className="checkout-container">
        <div className="checkout-details">
          <h2>Checkout</h2>
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="item-details">
                  <h3>{product.title}</h3>
                  <p>Promo</p>
                  <div className="item-price">${(product.price * product.quantity).toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PaymentPage handlePaymentSubmit={handlePaymentSubmit} />
      </div>
    </div>
  );
};

export default Checkout;
