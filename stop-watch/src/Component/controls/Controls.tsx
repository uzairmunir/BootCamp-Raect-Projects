import React, { useState } from 'react';
import './Controls.css';

type Props = {
  setTimeInSeconds: Function;
};

const Controls: React.FC<Props> = ({ setTimeInSeconds }) => {
  const [intervalId, setIntervalId] = useState<number>(0);
  //Function to play timer
  const playTimer = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((prev: number) => prev + 1);
    }, 1000);
    setIntervalId(interval);
  };
  // Function to stop timer
  const stopTimer = () => {
    clearInterval(intervalId);
  };
  const resetTimer = () => [clearInterval(intervalId), setTimeInSeconds(0)];
  return (
    <div className='controls-container'>
      <button onClick={playTimer}>Play</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Controls;
