import React, { useReducer, createContext } from 'react';
import TransactionReducer from './Reducer';
import { InitialStateProps, TransactionType } from '../types/Types';

let initialTransactions: InitialStateProps = {
  transactions: [],
  deleteTransaction: () => {},
  addTransaction: () => {},
};

export const TransactionContext = createContext(initialTransactions);

const ContextProvider: React.FC = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

  const addTransaction = (transaction: TransactionType) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };
  const deleteTransaction = (id: number) => {
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
