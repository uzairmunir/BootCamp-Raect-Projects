import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LaunchContainer from './components/LaunchList';
import LaunchProfileContainer from './components/LaunchProfile';

const RouteConfig = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LaunchContainer />} />
          <Route path='/:id' element={<LaunchProfileContainer />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouteConfig;
