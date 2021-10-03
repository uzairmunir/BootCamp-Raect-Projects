import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import EditContact from './components/EditContact/EditContact';
import Navbar from './components/Navbar/Navbar';

const RouteConfig = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Contacts />} />
        <Route exact path='/addcontact' element={<AddContact />} />
        <Route path='/contacts/:id' element={<EditContact />} />
      </Routes>
    </Router>
  );
};

export default RouteConfig;
