export type ProductItem = {
  products: {
    id: string;
    title: string;
    src: string;
    description: string;
    content: string;
    price: number;
    colors: string[];
    count: number;
  }[];
  product: any;
  cart: {
    id: string;
    title: string;
    src: string;
    description: string;
    content: string;
    price: number;
    colors: string[];
    count: number;
  }[];
};

export type productType = {
  id: string;
  title: string;
  src: string;
  description: string;
  content: string;
  price: number;
  colors: string[];
  count: number;
};
