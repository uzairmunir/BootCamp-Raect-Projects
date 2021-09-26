import React from 'react';
import { Link } from 'react-router-dom';
import { LaunchProfileQuery } from '../../generated/graphql';
import './ProfileStyles.css';

// Props Type
interface Props {
  data: LaunchProfileQuery;
}

const LaunchProfile: React.FC<Props> = ({ data }) => {
  return (
    <div className='profile-container'>
      <h1>
        Mission:
        <span
          className={`${data.launch?.launch_success ? 'success' : 'false'}`}
        >
          {data.launch?.mission_name}
        </span>
      </h1>
      <div className='image-container'>
        {data.launch?.links?.flickr_images?.map((image, index) =>
          image ? <img src={image} className='image' key={index} /> : null
        )}
      </div>
      <h2>Launch Details:</h2>
      <div className='launch-detail'>
        <h4>Flight Number: {data.launch?.flight_number}</h4>
        <hr />
        <h4>Site Name: {data.launch?.launch_site?.site_name}</h4>
        <hr />
        <h4>
          Launch Success: {data.launch?.launch_success ? 'True' : 'False'}
        </h4>
        <hr />
        <h4>Launch Year: {data.launch?.launch_year}</h4>
      </div>
      <h2>Rocket Details</h2>
      <div className='rocket-detail'>
        <h4>Rocket Name: {data.launch?.rocket?.rocket_name}</h4>
        <hr />
        <h4>Rocket Type: {data.launch?.rocket?.rocket_type}</h4>
      </div>
      <h2>Description</h2>
      <div className='description'>
        <h4>{data.launch?.details}</h4>
      </div>
      <Link to='/'>
        <button className='back-btn'>Back</button>
      </Link>
    </div>
  );
};

export default LaunchProfile;
