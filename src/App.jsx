import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import TrendingProducts from './components/TrendingProduct/TrendingProduct';
import MyCart from './components/MyCart/MyCart';
import CheckoutPage from './pages/Checkout/CheckoutPage'; 
import { CartProvider } from './contexts/CartContext';
import Footer from './components/Footer/Footer';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar func={handleCartClick}  />
        
        {/* {showCart && <MyCart />} */}
        <Routes>
          <Route path="/" element={<HomePage showCart={showCart} func={handleCartClick}/>} />
          <Route path="/trending" element={<TrendingProducts />} />
          {/* <Route func={handleCartClick} path="/mycart" element={<MyCart />} /> */}
          <Route path="/checkout" element={<CheckoutPage />} /> 
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
