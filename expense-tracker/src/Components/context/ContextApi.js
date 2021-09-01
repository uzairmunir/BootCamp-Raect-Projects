import React, { useReducer, createContext } from 'react';
import TransactionReducer from './Reducer';

let initialTransactions = {
  transactions: [],
};

export const TransactionContext = createContext(initialTransactions);

const ContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };

  let contextValue = { ...state, addTransaction, deleteTransaction };
  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};

export default ContextProvider;
