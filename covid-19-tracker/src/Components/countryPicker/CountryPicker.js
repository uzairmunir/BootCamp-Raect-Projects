import { Box, FormControl, NativeSelect } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { countriesData } from '../api/Api';

const CountryPicker = ({ handleCountryChange }) => {
  const [countriesName, setCountriesName] = useState([]);
  //Fetch Countries Names
  useEffect(() => {
    const fetchCountriesNames = async () => {
      setCountriesName(await countriesData());
    };
    fetchCountriesNames();
  }, [setCountriesName]);

  if (!countriesName) {
    return 'Loading';
  }
  return (
    <div style={{ padding: '1rem', marginTop: '1rem' }}>
      <FormControl>
        <NativeSelect
          defaultValue=''
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value=''>Global</option>
          {countriesName.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
