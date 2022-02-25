import React, { useState, useEffect } from 'react';
import ProductList from '../components/product-list/ProductList';
import Sidebar from '../components/sidebar/Sidebar';

import BottomNavbar from '../components/bottom-navbar/BottomNavbar';
import './home.scss'
  
const Home = () => {
  
  // Rendu de la page d'accueil depuis les components
  return (
    <div>
      <div className="container"> 
          <Sidebar /> 
          <ProductList />
          <BottomNavbar />
      </div>
    </div> 
  );
}
  
export default Home;