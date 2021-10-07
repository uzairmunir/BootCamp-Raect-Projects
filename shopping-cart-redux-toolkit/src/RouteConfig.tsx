import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Products from './components/home/products/Products';
import ProductDetail from './components/home/products/ProductDetail';
import Cart from './components/home/cart/Cart';
import About from './components/about/About';

const RouteConfig = (): JSX.Element => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteConfig;
