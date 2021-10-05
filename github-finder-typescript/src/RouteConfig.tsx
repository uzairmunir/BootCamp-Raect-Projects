import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import UserDetail from './components/userDetail/UserDetail';

const RouteConfig = (): JSX.Element => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:login' element={<UserDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouteConfig;
