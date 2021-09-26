import { gql } from '@apollo/client';

// Query For Fetching Data
export const LAUNCH_LIST_QUERY = gql`
  query LaunchList {
    launches {
      mission_name
      flight_number
      launch_success
      launch_date_utc
    }
  }
`;
