import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../redux/features/ProductSlice';
import { RootState } from '../../../redux/store/Store';
import './subtotal.css';

const Subtotal = () => {
  const cart = useSelector((state: RootState) => state.products.cart);
  const amount = cart.map((product) => product.price);
  const price = amount.reduce((acc, cur) => (acc += cur), 0);
  const dispatch = useDispatch();

  return (
    <div className='subtotal'>
      <h3>
        Total Items : <span>{cart.length}</span>
      </h3>
      <h3>
        Total : <span>${price}</span>
      </h3>
      <div className='subtotal-btn'>
        <button className='checkout-btn'>CheckOut</button>
        <button className='clear-btn' onClick={() => dispatch(clearCart())}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Subtotal;
