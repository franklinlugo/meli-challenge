import { ProductDetailResponse } from 'constants/types';

function productDetail(id: string): Promise<ProductDetailResponse> {
  return fetch(`http://localhost:4000/items/${id}`).then((res) => res.json());
}

export default productDetail;
