import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent/AddStundent';
import EditStudent from './components/EditStudent/EditStudent';
import Navbar from './components/Navbar/Navbar';
import StudentDetail from './components/StudentDetail/StudentDetail';
import Students from './components/Students/Students';

const RouteConfig = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Students />} />
        <Route exact path='/addstudent' element={<AddStudent />} />
        <Route exact path='/:id' element={<StudentDetail />} />
        <Route exact path='/student/edit/:id' element={<EditStudent />} />
      </Routes>
    </Router>
  );
};

export default RouteConfig;
