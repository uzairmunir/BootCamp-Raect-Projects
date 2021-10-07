import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/Store';
import './cart.css';
import CartItem from './CartItem';
import Subtotal from './Subtotal';

const Cart = () => {
  const cart = useSelector((state: RootState) => state.products.cart);
  console.log(cart);

  return (
    <div className='cart'>
      <h2>Cart</h2>
      <h6>This is Cart Page</h6>
      {cart.length > 0 ? (
        <div className='cart-container'>
          <div className='cart-grid'>
            {cart.map((cartProduct) => (
              <CartItem
                key={cartProduct.id}
                product={cartProduct}
                image={cartProduct.src}
                title={cartProduct.title}
                price={cartProduct.price}
              />
            ))}
          </div>
          <div>
            <Subtotal />
          </div>
        </div>
      ) : (
        <div>
          <h3>Currently Your Cart Is Empty</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
