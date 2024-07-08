import React from 'react';
import './TrendingProduct.css';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import tp1 from '../../assets/images/tp1.png';
import tp2 from '../../assets/images/tp2.png';
import tp3 from '../../assets/images/tp3.png';
import tp4 from '../../assets/images/tp4.png';
import tp5 from '../../assets/images/tp5.png';
import tp6 from '../../assets/images/tp6.png';
import tp7 from '../../assets/images/tp7.png';
import tp8 from '../../assets/images/tp8.png';
import tp9 from '../../assets/images/tp9.png';


const products = [
  { title: 'Product 1', price: '$20.00', image: tp1 },
  { title: 'Product 2', price: '$25.00', image: tp2 },
  { title: 'Product 3', price: '$30.00', image: tp3 },
  { title: 'Product 4', price: '$35.00', image: tp4 },
  { title: 'Product 5', price: '$40.00', image: tp5 },
  { title: 'Product 6', price: '$45.00', image: tp6 },
  { title: 'Product 7', price: '$50.00', image: tp7 },
  { title: 'Product 8', price: '$55.00', image: tp8 },
  { title: 'Product 9', price: '$60.00', image: tp9 },
];

const TrendingProduct = () => {

          return (
    <div className="trending-products-section">
      <h2>Trending Products</h2>
      <div className="card-container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.title} />
            <div className="card-title">
              {product.title}
              <FaShoppingCart className="add-to-cart-icon" />
            </div>
            <div className='card-container'>
            <div className="card-rating">
              {[...Array(5)].map((star, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
              <p className="card-price">{product.price}</p>
            </div>
            <div>
            <button className="order-button" onClick={() => handleOrderNow(product)}>
              Order Now
            </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
