export interface InitialStateProps {
  transactions: {
    id: number;
    description: string;
    amount: number;
  }[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: TransactionType) => void;
}

export type Actions =
  | { type: 'DELETE_TRANSACTION'; payload: number }
  | { type: 'ADD_TRANSACTION'; payload: TransactionType };

export type TransactionType = {
  id: number;
  description: string;
  amount: number;
};
export type TransactionPropsType = {
  transaction: {
    id: number;
    description: string;
    amount: number;
  };
};
