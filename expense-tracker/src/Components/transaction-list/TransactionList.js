import React, { useContext } from 'react';
import Transaction from './Transaction';
import './Transaction.css';
import { TransactionContext } from '../context/ContextApi';

const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div className='transaction-list'>
      <h4>History</h4>
      <hr />
      <ul className='list'>
        {transactions.map((transaction, index) => (
          <Transaction transaction={transaction} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
