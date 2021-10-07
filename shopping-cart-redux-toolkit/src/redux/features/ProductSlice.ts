import { productType, ProductItem } from './../../types/Types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ProductItem = {
  products: [
    {
      id: '0',
      title: 'Nike Shoes 01',
      src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/83d9d304-6afa-4cd8-8141-28844c0fc552/dbreak-type-shoe-XbSXwH.png',
      description: 'UI/UX designing, html css tutorials',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 23,
      colors: ['red', 'black', 'crimson', 'teal'],
      count: 1,
    },
    {
      id: '1',
      title: 'Nike Shoes 02',
      src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c36d5946-b220-4e4b-97b6-b72630303feb/dbreak-type-mens-shoe-CxCBss.png',
      description: 'UI/UX designing, html css tutorials',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 19,
      colors: ['red', 'crimson', 'teal'],
      count: 1,
    },
    {
      id: '2',
      title: 'Nike Shoes 03',
      src: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b5e5f317-5f62-4285-a24f-19b77a1d1e5b/daybreak-mens-shoe-TJlJgM.png',
      description: 'UI/UX designing, html css tutorials',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 50,
      colors: ['lightblue', 'white', 'crimson', 'teal'],
      count: 1,
    },
    {
      id: '3',
      title: 'Nike Shoes 04',
      src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fb0eb61-7740-465a-b830-93780f04a976/air-max-genome-older-shoe-Tf2ZzC.png',
      description: 'UI/UX designing, html css tutorials',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 15,
      colors: ['orange', 'black', 'crimson', 'teal'],
      count: 1,
    },
    {
      id: '4',
      title: 'Nike Shoes 05',
      src: 'https://www.shoesvalley.cn/image/cache/nike/2019/270Ract/2712/2c114cde-800x800.jpg',
      description: 'UI/UX designing, html css tutorials',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 10,
      colors: ['orange', 'black', 'crimson', 'teal'],
      count: 1,
    },
    {
      id: '5',
      title: 'Nike Shoes 06',
      src: 'https://cdn.shopify.com/s/files/1/2031/6995/products/AQ9974001_1_1280x.jpg?v=1571342948',
      description: 'UI/UX designing, html css tutorials',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 17,
      colors: ['orange', 'black', 'crimson', 'teal'],
      count: 1,
    },
  ],
  product: {},
  cart: [],
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action: PayloadAction<ProductItem | {}>) => {
      state.product = state.products.find(
        (product) => product.id == action.payload
      );
    },
    addCart: (state, action) => {
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.push({
          ...action.payload,
        });
      }
      state.cart = [...state.cart];
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { getProduct, addCart, removeCart, clearCart } =
  ProductSlice.actions;

export default ProductSlice.reducer;
