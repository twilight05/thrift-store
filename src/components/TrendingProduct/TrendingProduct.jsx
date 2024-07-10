// import React, { useContext } from 'react';
// import './TrendingProduct.css';
// import Button from '../Button/Button';
// import { FaStar } from 'react-icons/fa';
// import { CartContext } from '../../contexts/CartContext'; 
// import tp1 from '../../assets/images/tp1.png';
// import tp2 from '../../assets/images/tp2.png';
// import tp3 from '../../assets/images/tp3.png';
// import tp4 from '../../assets/images/tp4.png';
// import tp5 from '../../assets/images/tp5.png';
// import tp6 from '../../assets/images/tp6.png';
// import tp7 from '../../assets/images/tp7.png';
// import tp8 from '../../assets/images/tp8.png';
// import tp9 from '../../assets/images/tp9.png';
// import tp10 from '../../assets/images/tp10.png';
// import tp11 from '../../assets/images/tp11.png';
// import tp12 from '../../assets/images/tp12.png';
// import tp13 from '../../assets/images/tp13.png';
// import tp14 from '../../assets/images/tp14.png';
// import tp15 from '../../assets/images/tp15.png';
// import tp16 from '../../assets/images/tp16.png';
// import tp17 from '../../assets/images/tp17.png';
// import tp18 from '../../assets/images/tp18.png';

// const products = [
//   { id: '1',title: 'Classic Nike sneakers', price: '2,500', image: tp1 },
//   { id: '2',title: 'Classic sports', price: '2,500', image: tp2 },
//   { id: '3',title: 'Brown face cap', price: '1,000', image: tp3 },
//   { id: '4',title: 'Brown Zip up hoodie', price: '2,500', image: tp4 },
//   { id: '5',title: 'Loose cotton pant', price: '2,500', image: tp5 },
//   { id: '6',title: 'Cotton hoodie', price: '6,000', image: tp6 },
//   { id: '7',title: 'Rubber croc sandal', price: '2,500', image: tp7 },
//   { id: '8',title: 'Floral sneakers', price: '2,500', image: tp8 },
//   { id: '9',title: 'Burgundy fashion boots', price: '1,000', image: tp9 },
//     { id: '10',title: 'Hoodie with head cover', price: '7,500', image: tp10 },
//     { id: '11',title: 'T-shirt', price: '2,500', image: tp11 },
//     { id: '12',title: 'Female hoodie', price: '5,000', image: tp12 },
//     { id: '13',title: 'Bucket Cap', price: '800', image: tp13 },
//     { id: '14',title: 'Stylish cultural face cap', price: '1,500', image: tp14},
//     { id: '15',title: 'Female white hoodie', price: '4,000', image: tp15 },
//     { id: '16',title: 'Pleated belt', price: '2,500', image: tp16 },
//     { id: '17',title: 'Floral medium sized bra', price: '500', image: tp17 },
//     { id: '18',title: 'Denim short', price: '1,000', image: tp18},
// ];

// const TrendingProduct = () => {
//   const { addToCart } = useContext(CartContext); 

//   const handleOrderNow = (product) => {
//     addToCart(product);
//   };

//   return (
//     <div className="trending-products-section">
//       <h2> Products</h2>
//       <div className="card-container">
//         {products.map((product, index) => (
//           <div className="card" key={index}>
//             <div className="card-image">
//             <img src={product.image} alt={product.title} />
//             </div>
//             <div className="card-title">
//               {product.title}
//             </div>
//             <div  className='card2'>
//             <div className="card-rating">
//               {[...Array(5)].map((star, i) => (
//                 <FaStar key={i} className="star-icon" />
//               ))}
//               <p className="card-price">₦{product.price}</p>
//             </div>
//             <div>
//             <Button className="order-button" text="Add to cart" onClick={() => handleOrderNow(product)} />
//               </div>
//               </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrendingProduct;

// src/components/TrendingProduct/TrendingProduct.jsx
import React, { useContext } from 'react';
import './TrendingProduct.css';
import Button from '../Button/Button';
import { FaStar } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';
import tp1 from '../../assets/images/tp1.png';
import tp2 from '../../assets/images/tp2.png';
import tp3 from '../../assets/images/tp3.png';
import tp4 from '../../assets/images/tp4.png';
import tp5 from '../../assets/images/tp5.png';
import tp6 from '../../assets/images/tp6.png';
import tp7 from '../../assets/images/tp7.png';
import tp8 from '../../assets/images/tp8.png';
import tp9 from '../../assets/images/tp9.png';
import tp10 from '../../assets/images/tp10.png';
import tp11 from '../../assets/images/tp11.png';
import tp12 from '../../assets/images/tp12.png';
import tp13 from '../../assets/images/tp13.png';
import tp14 from '../../assets/images/tp14.png';
import tp15 from '../../assets/images/tp15.png';
import tp16 from '../../assets/images/tp16.png';
import tp17 from '../../assets/images/tp17.png';
import tp18 from '../../assets/images/tp18.png';

const products = [
  { id: '1', title: 'Classic Nike sneakers', price: '2,500', image: tp1 },
  { id: '2', title: 'Classic sports', price: '2,500', image: tp2 },
  { id: '3', title: 'Brown face cap', price: '1,000', image: tp3 },
  { id: '4', title: 'Brown Zip up hoodie', price: '2,500', image: tp4 },
  { id: '5', title: 'Loose cotton pant', price: '2,500', image: tp5 },
  { id: '6', title: 'Cotton hoodie', price: '6,000', image: tp6 },
  { id: '7', title: 'Rubber croc sandal', price: '2,500', image: tp7 },
  { id: '8', title: 'Floral sneakers', price: '2,500', image: tp8 },
  { id: '9', title: 'Burgundy fashion boots', price: '1,000', image: tp9 },
  { id: '10', title: 'Hoodie with head cover', price: '7,500', image: tp10 },
  { id: '11', title: 'T-shirt', price: '2,500', image: tp11 },
  { id: '12', title: 'Female hoodie', price: '5,000', image: tp12 },
  { id: '13', title: 'Bucket Cap', price: '800', image: tp13 },
  { id: '14', title: 'Stylish cultural face cap', price: '1,500', image: tp14 },
  { id: '15', title: 'Female white hoodie', price: '4,000', image: tp15 },
  { id: '16', title: 'Pleated belt', price: '2,500', image: tp16 },
  { id: '17', title: 'Floral medium sized bra', price: '500', image: tp17 },
  { id: '18', title: 'Denim short', price: '1,000', image: tp18 },
];

const TrendingProduct = () => {
  const { addToCart } = useContext(CartContext);

  const handleOrderNow = (product) => {
    addToCart(product);
  };

  return (
    <div className="trending-products-section">
      <h2>Products</h2>
      <div className="card-container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-title">
              {product.title}
            </div>
            <div className="card2">
              <div className="card-rating">
                {[...Array(5)].map((star, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
                <p className="card-price">₦{product.price}</p>
              </div>
              <div>
                <Button className="order-button" text="Add to cart" onClick={() => handleOrderNow(product)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;

