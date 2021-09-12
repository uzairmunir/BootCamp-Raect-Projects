import { Actions, TransactionType } from '../types/Types';

const TransactionReducer = (
  state: { transactions: TransactionType[] },
  action: Actions
) => {
  switch (action.type) {
    case 'ADD_TRANSACTION': {
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    }
    case 'DELETE_TRANSACTION': {
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};
export default TransactionReducer;
