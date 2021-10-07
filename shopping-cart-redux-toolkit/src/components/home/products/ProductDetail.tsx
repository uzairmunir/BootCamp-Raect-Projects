import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCart, getProduct } from '../../../redux/features/ProductSlice';
import { RootState } from '../../../redux/store/Store';
import './productDetail.css';

const ProductDetail = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.products.product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <div className='product-detail'>
      <div className='product-detail-img'>
        <img src={product.src} alt='product-detail' />
      </div>
      <div className='product-detail-content'>
        <h3>{product.title}</h3>
        <h3>${product.price}</h3>
        <h5>{product.content}</h5>
        <button className='cart-btn' onClick={() => dispatch(addCart(product))}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
