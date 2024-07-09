// src/components/PaymentPage/PaymentPage.jsx
import React, { useState } from 'react';
import './PaymentPage.css';
import Modal from '../../components/Modal/Modal';

const PaymentPage = ({ handlePaymentSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePaymentSubmit({
      paymentMethod,
      cardName,
      cardNumber,
      expiryDate,
      cvv,
    });
    // Show modal on successful payment
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Redirect to homepage after closing the modal
    window.location.href = '/';
  };

  return (
    <div className="payment-page">
      {showModal && (
        <Modal
          message="Payment Successful!"
          onClose={handleCloseModal}
        />
      )}
      <div className="payment-card">
        <h3>Payment Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          {paymentMethod === 'creditCard' && (
            <div>
              <div className="form-group">
                <label htmlFor="cardName">Name on Card</label>
                <input
                  type="text"
                  id="cardName"
                  value={cardName}
                  onChange={handleCardNameChange}
                  placeholder="Enter name on card"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="Enter card number"
                  required
                />
              </div>
              <div className="form-group form-inline">
                <div className="expiry-input">
                  <label htmlFor="expiryDate">Expiration Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    placeholder="MM/YYYY"
                    required
                  />
                </div>
                <div className="cvv-input">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={handleCVVChange}
                    placeholder="CVV"
                    required
                  />
                </div>
              </div>
            </div>
          )}
          <input type="submit" value="Pay Now" className="submit-button" />
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
