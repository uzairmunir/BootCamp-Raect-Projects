import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>Contact List</h1>
      </Link>
      <Link to='/addcontact'>
        <button>Add Contact</button>
      </Link>
    </nav>
  );
};

export default Navbar;
