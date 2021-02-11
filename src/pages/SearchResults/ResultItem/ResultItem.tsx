import * as React from 'react';
import { AspectRatioBox } from 'shared';
import { StyledResultItem } from './ResultItemStyles';

const ResultItem: React.FC = () => {
  return (
    <StyledResultItem>
      <AspectRatioBox ratio="1:1" className="image">
        <img src="https://via.placeholder.com/180" alt="product" />
      </AspectRatioBox>
      <div className="productInfo">
        <span className="price">$ 1980</span>
        <span className="location">location</span>
        <span className="description">description</span>
      </div>
    </StyledResultItem>
  );
};

export default ResultItem;
