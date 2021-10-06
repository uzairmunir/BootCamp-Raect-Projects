import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>Student Crud</h1>
      </Link>
      <Link to='/addstudent'>
        <button>Add Student</button>
      </Link>
    </nav>
  );
};

export default Navbar;
