import * as React from 'react';
import { StyledResults } from './ResultsStyles';
import ResultItem from '../ResultItem';

type Item = {
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

type ResultsProps = {
  items: Item[];
};

const Results: React.FC<ResultsProps> = ({ items = [] }) => {
  return (
    <StyledResults>
      {items.map(({ id, title, price, picture, condition, free_shipping }) => (
        <ResultItem
          key={id}
          id={id}
          title={title}
          price={price}
          picture={picture}
          condition={condition}
          free_shipping={free_shipping}
        />
      ))}
    </StyledResults>
  );
};

export default Results;
