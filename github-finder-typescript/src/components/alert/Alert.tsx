import React, { useContext } from 'react';
import { AlertContext } from '../../context/alert/AlertContext';
import './Alert.css';

const Alert = (): JSX.Element => {
  const alertContext = useContext(AlertContext);

  // const { alert } = alertContext;

  return (
    // alert !== null && (
    //   <div className={`alert alert-${alert.type}`}>
    //     <i className='fas fa-info-circle'></i> {alert.msg}
    //   </div>
    // )
    <h1>Alert</h1>
  );
};

export default Alert;
