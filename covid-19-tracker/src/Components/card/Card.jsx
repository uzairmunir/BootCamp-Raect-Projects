import { Box, Grid, Card, Typography, CardContent } from '@material-ui/core';
import React from 'react';
import './CardData.css';
import CountUp from 'react-countup';

const CardData = ({ data }) => {
  if (!data.confirmed) {
    return <h1>...Loading</h1>;
  }
  return (
    <Box className='box'>
      {/* Grid Container */}
      <Grid container spacing={3}>
        {/* Grid Item Data for Infected Card  */}
        <Grid item component={Card} md={3} sm={12} className='card infected'>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infected
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={data.confirmed.value}
                duration={1}
                separator=', '
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of Active Cases of Covid 19
            </Typography>
          </CardContent>
        </Grid>
        {/* Grid Item Data For Recovered Card */}
        <Grid item component={Card} md={3} sm={12} className='card recovered'>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered
            </Typography>
            <Typography variant='h5'>
              {' '}
              <CountUp
                start={0}
                end={data.recovered.value}
                duration={1}
                separator=' ,'
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of Recoveries from Covid 19
            </Typography>
          </CardContent>
        </Grid>
        {/* Grid Item Data For Death Card */}
        <Grid item component={Card} md={3} sm={12} className='card deaths'>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={data.deaths.value}
                duration={1}
                separator=', '
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of Deaths Caused by Covid 19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardData;
