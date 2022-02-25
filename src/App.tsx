import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
  
const App: FunctionComponent = () => {
    
 return (
    // Navigation de l'application
   <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
   </Router>
 )
}
  
export default App;