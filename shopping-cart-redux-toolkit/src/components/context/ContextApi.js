import { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './Reducer';

export const CartContext = createContext();
const storage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];
const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkOut: false,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (payload) => {
    dispatch({ type: 'INCREASE', payload });
  };
  const decrease = (payload) => {
    dispatch({ type: 'DECREASE', payload });
  };
  const addProduct = (payload) => {
    dispatch({ type: 'ADD_PRODUCT', payload });
  };
  const removeProduct = (payload) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload });
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
  };

  const handleCheckout = () => {
    console.log('CHECKOUT', state);
    dispatch({ type: 'CHECKOUT' });
  };

  let contextValues = {
    increase,
    decrease,
    addProduct,
    removeProduct,
    clearCart,
    handleCheckout,
    ...state,
  };
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
