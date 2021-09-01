import React from 'react';
import Header from './Components/header/Header';
import './App.css';
import Balance from './Components/balance/Balance';
import IncomeExpense from './Components/income-expense/IncomeExpense';
import TransactionList from './Components/transaction-list/TransactionList';
import AddTransaction from './Components/add-transaction/AddTransaction';
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
