import React from 'react';
import { useLaunchListQuery } from '../../generated/graphql';
import logo from '../../images/logo.png';
import LaunchList from './LaunchList';
import './LaunchStyles.css';

const LaunchContainer = (): any => {
  // Fetching Data from Query
  const { error, data, loading } = useLaunchListQuery();
  // Loading
  if (loading) {
    return (
      <img
        src='https://i.pinimg.com/originals/3e/f0/e6/3ef0e69f3c889c1307330c36a501eb12.gif'
        style={{
          display: 'flex',
          margin: '0 auto',
          marginTop: '1rem',
        }}
      />
    );
  }
  // Error
  if (error || !data) {
    return alert(error);
  }

  return (
    <>
      <div className='logo-container'>
        <img src={logo} alt='logo' className='logo-img' />
      </div>
      <h1>Launches</h1>
      <p>
        <span className='succeed'></span> = Success
      </p>
      <p>
        <span className='fail'></span> = Fail
      </p>
      <LaunchList data={data} />
    </>
  );
};

export default LaunchContainer;
