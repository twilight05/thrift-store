// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


// import CheckoutPage from './pages/CheckoutPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />


      {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
    </Routes>
  </Router>
);

export default App;
