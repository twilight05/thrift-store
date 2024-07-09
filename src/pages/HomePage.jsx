import React from 'react';
import TrendingProduct from '../components/TrendingProduct/TrendingProduct';
import MyCart from '../components/MyCart/MyCart';


const HomePage = ({showCart, func}) => {
  

  return(
   
  <div>
      <TrendingProduct func={showCart} />
            {showCart && (<MyCart func={func}/>)}
    
  </div>
  );
};

export default HomePage;



