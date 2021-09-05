import React, { useEffect, useState } from 'react';
import { fetchData } from './Components/api/Api';
import './App.css';
import CardData from './Components/card/Card';
import CountryPicker from './Components/countryPicker/CountryPicker';
import Chart from './Components/chart/Chart';
const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  //Set Fetched data
  useEffect(() => {
    const fetchedData = async () => {
      setData(await fetchData());
    };
    fetchedData();
  }, []);

  const handleCountryChange = async (country) => {
    setData(await fetchData(country));
    setCountry(country);
  };

  return (
    <div className='container'>
      <div className='img-div'>
        <img
          src='https://scitechdaily.com/images/Coronavirus-Particle-Triangular-Spikes.gif'
          className='covid-img'
        />
      </div>
      <CardData data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
