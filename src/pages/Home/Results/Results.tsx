import * as React from 'react';
import { StyledResults } from './ResultsStyles';
import ResultItem from '../ResultItem';

const Results: React.FC = () => {
  const items = [...Array(5).keys()];

  return (
    <StyledResults>
      {items.map((item) => (
        <ResultItem key={item} />
      ))}
    </StyledResults>
  );
};

export default Results;
