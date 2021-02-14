import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { AspectRatioBox } from 'shared';
import { Item as ResultItemProps } from 'constants/types';
import { StyledResultItem } from './ResultItemStyles';

const ResultItem: React.FC<ResultItemProps> = ({ id, title, picture, price }) => {
  const formattedPrice = String(price.amount.toFixed()).replace(/\d(?=(\d{3})+$)/g, '$&.');
  const history = useHistory();

  function goToProductDetail() {
    history.push(`/items/${id}`);
  }

  return (
    <StyledResultItem>
      <AspectRatioBox ratio="1:1" className="image" onClick={goToProductDetail}>
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
