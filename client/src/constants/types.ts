export type Item = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type ItemProductDetail = Item & {
  sold_quantity: number;
  description: string;
};

export type SearchResponse = {
  author: {
    name: string;
    lastName: string;
  };
  categories: string[];
  items: Item[];
};

export type ProductDetailResponse = {
  author: {
    name: string;
    lastName: string;
  };
  item: ItemProductDetail;
  categories: string[];
};
