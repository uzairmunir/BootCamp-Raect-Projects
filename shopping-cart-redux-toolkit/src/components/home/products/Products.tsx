import { productType } from '../../../types/Types';
import { RootState } from '../../../redux/store/Store';
import './products.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../../redux/features/ProductSlice';

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <h1>Products</h1>
      <div className='products-container'>
        <div className='grid-container'>
          {products.map((product: productType) => (
            <div className='grid-item' key={product.id}>
              <div className='card'>
                <img
                  className='product-img'
                  src={product.src}
                  alt='product-img'
                />

                <button
                  className='btn'
                  onClick={() => (
                    dispatch(addCart(product)), alert('Product Added to Cart')
                  )}
                >
                  Add To cart
                </button>
                <Link to={`/${product.id}`} className='detail'>
                  Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
