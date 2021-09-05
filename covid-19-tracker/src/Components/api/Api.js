import axios from 'axios';
import React from 'react';

const url = 'https://covid19.mathdro.id/api';

// Fetch Api Data{confirmed recovered deaths} using axios
export const fetchData = async (country) => {
  let changeAbleUrl = url;
  if (country) {
    changeAbleUrl = `https://covid19.mathdro.id/api/countries/${country}`;
  }
  try {
    let {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(changeAbleUrl);
    let modifyData = {
      confirmed,
      deaths,
      recovered,
      lastUpdate,
    };
    return modifyData;
  } catch (error) {
    console.log(error);
  }
};
// Fetch Daily Data
export const fetchDailyData = async () => {
  try {
    let { data } = await axios.get(`${url}/daily`);
    let modifyData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifyData;
  } catch (error) {}
};

// Fetch Countries Name
export const countriesData = async () => {
  try {
    let { data } = await axios.get(`${url}/countries`);
    return data.countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
