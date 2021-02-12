import * as React from 'react';
import { Breadcrumbs } from 'shared';
import { useParams } from 'react-router-dom';
import { StyledProductDetail } from './ProductDetailStyles';

interface ParamTypes {
  id: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  return (
    <StyledProductDetail>
      <Breadcrumbs />
      <span>id: {id}</span>
    </StyledProductDetail>
  );
};

export default ProductDetail;
