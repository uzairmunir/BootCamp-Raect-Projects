import React, { useContext, useState } from 'react';
import './AddTransaction.css';
import { TransactionContext } from '../context/ContextApi';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTransaction = {
      id: Math.floor(Math.random() * 1000),
      description: text,
      amount: +amount,
    };
    setText('');
    setAmount(0);
    addTransaction(newTransaction);
  };
  return (
    <div className='add-transaction'>
      <h4>Add Transaction</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label>Enter Text</label>
          <input
            type='text'
            placeholder='Enter Text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className='form-control'>
          <label>Enter Amount (+ for Income & - for Expense)</label>
          <input
            type='number'
            placeholder='Enter Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='add-btn'>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
