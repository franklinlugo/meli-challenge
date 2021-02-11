import * as React from 'react';
import { useParams } from 'react-router-dom';

interface ParamTypes {
  id: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  return (
    <div>
      <span>id: {id}</span>
    </div>
  );
};

export default ProductDetail;
