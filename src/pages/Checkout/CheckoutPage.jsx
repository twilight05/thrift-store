

// src/components/Checkout/CheckoutPage.jsx
import React, { useContext } from "react";
import "./Checkout.css"; // Import CSS file for Checkout component
import { CartContext } from "../../contexts/CartContext";
import PaymentPage from "../Paymentpage/PaymentPage"; // Import the PaymentPage component
import Vector from "../../assets/images/Vector.png";

const Checkout = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalItems = cart.length;
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePaymentSubmit = (paymentData) => {
    // Handle payment submission logic here (e.g., API calls, state updates)
    console.log("Payment details:", paymentData);
    // You can add further logic for payment processing
  };

  return (
    <div className="checkout-section">
      <div className="checkout-container">
        <div className="checkout-details">
        <div className="checkout-header">
  <a href="/"> 
    <img className="move" src={Vector} alt="vector" />
  </a>
  <h2>Checkout</h2>
</div>

          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="item-details">
                  <h3>{product.title}</h3>

                  <button onClick={() => removeFromCart(product)}>
                    Remove
                  </button>
                </div>
                <div className="cart-price">
                  {" "}
                  N{(parseFloat(product.price) || 0).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <p>Total:</p>
            <span>N{totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <PaymentPage handlePaymentSubmit={handlePaymentSubmit} />
      </div>
    </div>
  );
};

export default Checkout;

