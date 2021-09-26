import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './LaunchStyle.css';
import logo from '../../images/logo.png';
import LaunchList from './LaunchList';

//Graph Ql Query
const LAUNCH_LIST_QUERY = gql`
  query LaunchesList {
    launches {
      mission_name
      launch_success
      launch_date_utc
      flight_number
    }
  }
`;

const LaunchContainer = () => {
  const { data, error, loading } = useQuery(LAUNCH_LIST_QUERY);
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
  if (error || !data) {
    return alert(error);
  }
  console.log(data);
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
      {data.launches?.map((launch, index) => (
        <LaunchList
          key={index}
          name={launch?.mission_name}
          number={index + 1}
          status={launch?.launch_success}
          date={launch?.launch_date_utc}
          id={launch?.flight_number}
        />
      ))}
    </>
  );
};

export default LaunchContainer;
