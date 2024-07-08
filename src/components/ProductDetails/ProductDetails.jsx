import React, { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { selectedProduct } = useContext(CartContext);

  if (!selectedProduct) {
    return null;
  }

  return (
    <div className="product-details-section">
      <h2>{selectedProduct.title}</h2>
      <img src={selectedProduct.image} alt={selectedProduct.title} />
      <div className="price">{selectedProduct.price}</div>
      <button className="pay-now-button">Pay Now</button>
    </div>
  );
};

export default ProductDetails;
