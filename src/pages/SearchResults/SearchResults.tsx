import * as React from 'react';
import { Breadcrumbs } from 'shared';
import Results from './Results';
import { StyledSearchResults } from './SearchResultsStyles';

const SearchResults: React.FC = () => {
  return (
    <StyledSearchResults>
      <Breadcrumbs />
      <Results />
    </StyledSearchResults>
  );
};

export default SearchResults;
