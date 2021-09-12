import React, { useContext } from 'react';
import './Transaction.css';
import { TransactionContext } from '../context/ContextApi';
import { TransactionPropsType } from '../types/Types';

const Transaction: React.FC<TransactionPropsType> = ({ transaction }) => {
  const { deleteTransaction, transactions } = useContext(TransactionContext);
  const amount = transactions.map((transaction) => transaction.amount);
  return (
    <div className='transaction'>
      <li className={`${Number(amount) > 0 ? 'income-li' : 'expense-li'}`}>
        {transaction.description}
        <span>${transaction.amount}</span>
      </li>
      <button
        className='del-btn'
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </div>
  );
};

export default Transaction;
