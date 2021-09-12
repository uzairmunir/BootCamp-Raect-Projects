import React, { useContext } from 'react';
import './Balance.css';
import { TransactionContext } from '../context/ContextApi';

const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  const amount = transactions.map((transaction, index) => transaction.amount);
  const totalBalance = amount.reduce((acc, item) => (acc += item), 0);

  return (
    <div className='balance'>
      <h3>Current Balance</h3>
      <h3>$ {totalBalance > 0 ? totalBalance : '0'}</h3>
    </div>
  );
};

export default Balance;
