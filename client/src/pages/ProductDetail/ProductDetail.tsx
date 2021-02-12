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
      <div className="productCard">
        <div className="productImage">
          <div className="image">
            <img src="https://via.placeholder.com/400" alt="img" />
          </div>
          <div className="info">
            <p className="status">Nuevo - 294 vendidos</p>
            <h3 className="title">Deco Reverse Sombrero Oxford</h3>
            <span className="price">$ 1980</span>
            <button className="buyBtn" type="button">
              Comprar
            </button>
          </div>
        </div>
        <div className="productDescription">
          <h5 className="title">dd</h5>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque voluptates accusamus quisquam fugit
            possimus, itaque consequatur animi modi similique?
          </p>
        </div>
      </div>
    </StyledProductDetail>
  );
};

export default ProductDetail;
