import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import Results from '../results/Results';

const RouteConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/search' />} />
      <Route path='/search' element={<Results />} />
      <Route path='/images' element={<Results />} />
      <Route path='/news' element={<Results />} />
    </Routes>
  );
};

export default RouteConfig;
