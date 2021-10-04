import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import EditContact from './components/EditContact/EditContact';
import Navbar from './components/Navbar/Navbar';

const RouteConfig: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Contacts />} />
        <Route path='/addcontact' element={<AddContact />} />
        <Route path='/contacts/:id' element={<EditContact />} />
      </Routes>
    </Router>
  );
};

export default RouteConfig;
