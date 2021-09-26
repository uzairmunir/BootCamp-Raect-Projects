import React from 'react';
import { useParams } from 'react-router';
import { useLaunchProfileQuery } from '../../generated/graphql';
import LaunchProfile from './LaunchProfile';
import './ProfileStyles.css';

const LaunchProfileContainer = (): any => {
  // Getting Id/Flight_Number
  const { id }: any = useParams();
  //Fetching Data from Query
  const { error, data, loading } = useLaunchProfileQuery({
    variables: { id: id },
  });
  //Loading
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
  //Error
  if (error || !data) {
    return alert(error);
  }

  return (
    <>
      <LaunchProfile data={data} />
    </>
  );
};

export default LaunchProfileContainer;
