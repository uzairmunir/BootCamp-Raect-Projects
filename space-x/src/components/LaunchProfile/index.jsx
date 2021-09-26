import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import LaunchProfile from './LaunchProfile';

//Query for Fetching Data
const LAUNCH_PROFILE_QUERY = gql`
  query LaunchProfile($id: String!) {
    launch(id: $id) {
      flight_number
      mission_name
      launch_year
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
      }
    }
  }
`;

const LaunchProfileContainer = () => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(LAUNCH_PROFILE_QUERY, {
    variables: { id: id },
  });
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
      <LaunchProfile data={data} />
    </>
  );
};

export default LaunchProfileContainer;
