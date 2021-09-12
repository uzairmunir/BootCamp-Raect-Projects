import React from 'react';
import Balance from './Components/balance/Balance';
import Header from './Components/header/Header';
import IncomeExpense from './Components/income-expense/IncomeExpense';
import './App.css';
import AddTransaction from './Components/add-transaction/AddTransaction';
import TransactionList from './Components/transaction-list/TransactionList';
import ContextProvider from './Components/context/ContextApi';

const App = () => {
  return (
    <div className='app'>
      <ContextProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </ContextProvider>
    </div>
  );
};

export default App;
