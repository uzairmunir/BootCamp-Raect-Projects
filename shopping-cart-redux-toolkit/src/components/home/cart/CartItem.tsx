import React from 'react';
import './cart.css';
import { productType } from '../../../types/Types';
import { removeCart } from '../../../redux/features/ProductSlice';
import { useDispatch } from 'react-redux';

type Props = {
  product: productType;
  image: string;
  title: string;
  price: number;
};

const CartItem: React.FC<Props> = ({ product, image, title, price }) => {
  const dispatch = useDispatch();
  return (
    <div className='cart-card'>
      <img src={image} alt='cart-img' className='cart-img' />
      <div className='card-detail'>
        <div className='cart-title'>
          <h4>{title}</h4>
          <h5>Price : ${price}</h5>
        </div>

        <div className='buttons'>
          {/* <AddIcon className='increase-btn' onClick={() => increase(product)} />
          {quantity > 1 ? (
            <RemoveIcon
              className='decrease-btn'
              onClick={() => decrease(product)}
            />
          ) : (
            <DeleteIcon
              className='delete-btn'
              onClick={() => removeProduct(product)}
            />
          )} */}
          <i
            className='fas fa-trash delete-btn'
            onClick={() => dispatch(removeCart(product.id))}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
