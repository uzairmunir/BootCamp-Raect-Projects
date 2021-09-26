import React, { useEffect, useState } from 'react';
import './Main.css';
import CalculateTime from '../timer/Timer';
import Controls from '../controls/Controls';

const Main = () => {
  // States
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  useEffect(() => {
    setTimerArray(CalculateTime(timeInSeconds));
  }, [timeInSeconds]);
  return (
    <>
      <section className='container'>
        <p>{timerArray[0]}</p>
        <span>:</span>
        <p>{timerArray[1]}</p>
        <span>:</span>
        <p>{timerArray[2]}</p>
      </section>
      <Controls setTimeInSeconds={setTimeInSeconds} />
    </>
  );
};

export default Main;
