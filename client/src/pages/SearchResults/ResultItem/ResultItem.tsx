import * as React from 'react';
import { AspectRatioBox } from 'shared';
import { StyledResultItem } from './ResultItemStyles';

type ResultItemProps = {
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

const ResultItem: React.FC<ResultItemProps> = ({ title, picture, price }) => {
  const formattedPrice = String(price.amount.toFixed()).replace(/\d(?=(\d{3})+$)/g, '$&.');

  return (
    <StyledResultItem>
      <AspectRatioBox ratio="1:1" className="image">
        <img src={picture} alt={title} />
      </AspectRatioBox>
      <div className="productInfo">
        <span className="price">$ {formattedPrice}</span>
        <span className="location">Capital Federal</span>
        <span className="title">{title}</span>
      </div>
    </StyledResultItem>
  );
};

export default ResultItem;
