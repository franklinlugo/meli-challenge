import * as React from 'react';
import { StyledSearchResults } from './SearchResultsStyles';
import Breadcrumbs from '../Breadcrumbs';
import Results from '../Results';

const SearchResults: React.FC = () => {
  return (
    <StyledSearchResults>
      <Breadcrumbs />
      <Results />
    </StyledSearchResults>
  );
};

export default SearchResults;
