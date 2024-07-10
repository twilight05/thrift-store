// // src/components/MyCart/MyCart.jsx
// import React, { useContext } from 'react';
// import './MyCart.css'; 
// import Vector from '../../assets/images/Vector.png';
// import { CartContext } from '../../contexts/CartContext';
// import { useNavigate } from 'react-router-dom';
// import Button from '../Button/Button';

// const MyCart = () => {
//   const { cart, removeFromCart, toggleCartVisibility } = useContext(CartContext);
//   const navigate = useNavigate();

//   const totalItems = cart.length;
//   const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

//   const handleRemove = (productToRemove) => {
//     removeFromCart(productToRemove);
//   };
  

//   const handleCheckout = () => {
//     navigate('/checkout');
//   };

//   return (
//     <div className="cart-section">
//       <div className="cart-container">
//       <div className="cart-header">
//                   <h2><span>
//             <a href="/"> 
//               <img className="move" src={Vector} alt="vector" />
//             </a></span>My Cart</h2>
          
//           <span>{totalItems} items</span>
//         </div>
//         {cart.map((product) => (
//           <div className="cart-card" key={product.id}>
//             <img src={product.image} alt={product.title} />
//             <div className="cart-details">
//               <h3>{product.title}</h3>
//               <button className="remove-button" onClick={() => handleRemove(product)}>Remove</button>
//             </div>
//             <div className="cart-actions">
//               <div className="price">₦{product.price}</div>
//             </div>
//           </div>
//         ))}
//         <div className="cart-footer">
//           <h3>Total: ₦{totalPrice.toFixed(2)}</h3>
//           <div>
//             <Button text="Continue Shopping" className="checkout-button" onClick={toggleCartVisibility} />
//             <Button text="Checkout" className="checkout-button" onClick={handleCheckout} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyCart;
import React, { useContext } from 'react';
import './MyCart.css'; 
import Vector from '../../assets/images/Vector.png';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const MyCart = () => {
  const { cart, removeFromCart, toggleCartVisibility } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

  const handleRemove = (productToRemove) => {
    removeFromCart(productToRemove);
  };

  const handleCheckout = () => {
    toggleCartVisibility();
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    toggleCartVisibility();
  };

  return (
    <div className="cart-section">
      <div className="cart-container">
        <div className="cart-header">
          <h2>
            <span>
              <a href="/"> 
                <img className="move" src={Vector} alt="vector" />
              </a>
            </span>
            My Cart
          </h2>
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
            <Button text="Continue Shopping" className="checkout-button" onClick={handleContinueShopping} />
            <Button text="Checkout" className="checkout-button" onClick={handleCheckout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
