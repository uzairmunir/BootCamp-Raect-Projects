import React, { useContext } from 'react';
import './IncomeExpense.css';
import { TransactionContext } from '../context/ContextApi';

const IncomeExpense = () => {
  const { transactions } = useContext(TransactionContext);
  const amount = transactions.map((transaction, index) => transaction.amount);
  const income = amount
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense =
    amount
      .filter((amount) => amount < 0)
      .reduce((acc, item) => (acc += item), 0) * -1;
  return (
    <div className='income-expense'>
      <div className='income'>
        <h4>Income</h4>
        <h3>$ {income > 0 ? income : '0'}</h3>
      </div>
      <div className='expense'>
        <h4>Expense</h4>
        <h3>$ -{expense}</h3>
      </div>
    </div>
  );
};

export default IncomeExpense;
