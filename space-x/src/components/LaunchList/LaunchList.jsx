import React from 'react';
import { Link } from 'react-router-dom';
import './LaunchStyle.css';

const LaunchList = ({ name, date, status, number, id }) => {
  return (
    <div className='list-container'>
      <h2>
        {number}. Mission :
        <span className={`${status ? 'success' : 'false'}`}>{name}</span>
      </h2>
      <p>Date : {date}</p>
      <Link to={`/${id}`}>
        <button className='detail-btn'>Details</button>
      </Link>
    </div>
  );
};

export default LaunchList;
