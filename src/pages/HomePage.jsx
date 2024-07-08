import React from 'react';
import Navbar from '../components/Navbar/Navbar';
// import HeroSection from '../components/HeroSection/HeroSection';
// import Category from '../components/Category/Category';
import TrendingProduct from '../components/TrendingProduct/TrendingProduct';
import MyCart from '../components/MyCart/MyCart';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

// import Footer from '../components/Footer/Footer';

const HomePage = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };


  return(
   
  <>
    <Navbar func={handleCartClick} />
    {/* <HeroSection /> */}
    {/* <Category /> */}
    <TrendingProduct />
    {showCart && <MyCart />}
    {/* <MyCart /> */}
    {/* <Footer /> */}
  </>
  );
};

export default HomePage;



