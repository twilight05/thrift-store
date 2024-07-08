import React from 'react';
import Button from '../Button/Button';
import { FashoppingCart } from 'react-icons';
import './Navbar.css';

const Navbar = ({func}) => (
  
  <nav className="navbar">
    <div className="navbar-brand">No.1 Thrift</div>

  {/* My designer removed this but just in casae she changes her mnd, i'll just comment it out */}
      {/* <ul className="nav-menu"> 
       <li className="nav-item">Home</li>
      <li className="nav-item">Products</li> 
      <li className="nav-item">FAQs</li>
      <li className="nav-item">Contact</li>
     </ul> */}
      
    
   <div className='nav-menu'>
    <input type="text" className="search-bar" placeholder="Search..." />
    <Button className="cart-button" onClick={func}>
    <FaShoppingCart className="add-to-cart-icon" /> </Button>
    <Button className="btn-primary" onClick={func} text="Explore" ></Button>
    </div>
          
  </nav>
);

export default Navbar;
