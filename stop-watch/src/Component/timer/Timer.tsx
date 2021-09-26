import React from 'react';

const CalculateTime = (timeInSeconds: number): Array<number | string> => {
  let hours: number = Math.floor(timeInSeconds / 3600);
  let minutes: number = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds: number = Math.floor(timeInSeconds - hours * 3600 - minutes * 60);
  // Formate Hours Minutes and Seconds On Time Formate
  let formateHours = hours < 10 ? `0${hours}` : hours;
  let formateMinutes = minutes < 10 ? `0${minutes}` : minutes;
  let formateSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return [formateHours, formateMinutes, formateSeconds];
};

export default CalculateTime;
