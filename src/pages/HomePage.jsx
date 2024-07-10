// import React from 'react';
// import TrendingProduct from '../components/TrendingProduct/TrendingProduct';
// import MyCart from '../components/MyCart/MyCart';


// const HomePage = ({showCart, func}) => {
  

//   return(
   
//   <div>
//       <TrendingProduct func={showCart} />
//             {showCart && (<MyCart func={func}/>)}
    
//   </div>
//   );
// };

// export default HomePage;



// src/pages/HomePage.jsx
import React from 'react';
import TrendingProduct from '../components/TrendingProduct/TrendingProduct';

const HomePage = () => {
  return (
    <div>
      <TrendingProduct />
    </div>
  );
};

export default HomePage;
