import * as React from 'react';
import { Breadcrumbs } from 'shared';
import SearchResultsLayout from './SearchResultsLayout';
import Results from './Results';

const SearchResults: React.FC = () => {
  return (
    <>
      <SearchResultsLayout>
        <Breadcrumbs />
        <Results />
      </SearchResultsLayout>
    </>
  );
};

export default SearchResults;
