import React, { useEffect, useState } from 'react';
import { fetchDailyData } from '../api/Api';
import { Bar, Line } from 'react-chartjs-2';
import './Chart.css';

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  // fetch daily data from api component
  useEffect(() => {
    const fetchedData = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchedData();
  }, []);

  //Bar Chart
  const BarChart = data.confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'Peoples',
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
            backgroundColor: ['#455ede', ' #27f253', '#f23538'],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Your Current State is ${country}` },
      }}
    />
  ) : null;
  // Line Chart
  const LineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            borderColor: 'blue',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            backgroundColor: '#f23538',
            borderColor: 'red',
            fill: 'true',
          },
        ],
      }}
    />
  ) : null;
  return (
    <div className='chart-container'>{country ? BarChart : LineChart}</div>
  );
};

export default Chart;
