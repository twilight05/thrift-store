import React, { useState, useContext } from 'react';
import carti from '../../assets/images/carti.png';
import './Navbar.css';
import Button from '../Button/Button';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const Navbar = ({func}) => {
  const { cart } = useContext(CartContext);

  const cartCount = cart.length;
  

  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-brand">No.1 Thrift</Link>
      </div>
      <div className="nav-menu">
        
      <div className="cart-icon-container" onClick={func}>
      <img src={carti} alt="CartIcon" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>

        <Link to="/trending" className="nav-link explore-link">
          <Button text="Explore" className="explore-button" />
        </Link>
      </div>
    </nav>
    
    </>
  );
};


export default Navbar;
