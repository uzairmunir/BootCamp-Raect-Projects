import React from 'react';
import { Link } from 'react-router-dom';
import { LaunchListQuery } from '../../generated/graphql';
import './LaunchStyles.css';

// Props Types
interface Props {
  data: LaunchListQuery;
}

const LaunchList: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.launches?.map((launch, index) => (
        <div className='list-container' key={index}>
          <h2>
            {index + 1}. Mission :
            <span className={`${launch?.launch_success ? 'success' : 'false'}`}>
              {launch?.mission_name}
            </span>
          </h2>
          <p>Date : {launch?.launch_date_utc}</p>
          <Link to={`/${launch?.flight_number}`}>
            <button className='detail-btn'>Details</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default LaunchList;
