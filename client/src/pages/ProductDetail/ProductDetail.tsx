import * as React from 'react';
import { Breadcrumbs } from 'shared';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import parse from 'html-react-parser';
import { productDetail as productDetailService } from 'services';
import { ProductDetailResponse } from 'constants/types';
import { StyledProductDetail } from './ProductDetailStyles';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, isError, data } = useQuery([id], () => productDetailService(id));
  const { item, categories = [] } = (data as ProductDetailResponse) || {};
  const { price, picture, title, condition, sold_quantity: soldQuantity, description = '' } = item || {};

  const formattedPrice = String(price?.amount.toFixed()).replace(/\d(?=(\d{3})+$)/g, '$&.');

  if (isLoading) {
    return (
      <StyledProductDetail>
        <span>Is loading...</span>
      </StyledProductDetail>
    );
  }

  if (isError) {
    return (
      <StyledProductDetail>
        <span>An error has been ocurred</span>
      </StyledProductDetail>
    );
  }

  return (
    <StyledProductDetail>
      <Breadcrumbs categories={categories} />
      <div className="productCard">
        <div className="productImage">
          <div className="image">
            <img src={picture} alt={title} />
          </div>
          <div className="info">
            <p className="status">
              {condition} - {soldQuantity} vendidos
            </p>
            <h3 className="title">{title}</h3>
            <span className="price">$ {formattedPrice}</span>
            <button className="buyBtn" type="button">
              Comprar
            </button>
          </div>
        </div>
        <div className="productDescription">
          <h5 className="title">Descripción del producto</h5>
          <p className="paragraph">{parse(description)}</p>
        </div>
      </div>
    </StyledProductDetail>
  );
};

export default ProductDetail;
