import * as React from 'react';
import { Breadcrumbs } from 'shared';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { search as searchService } from 'services';
import { SearchResponse } from 'constants/types';
import Results from './Results';
import { StyledSearchResults } from './SearchResultsStyles';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults: React.FC = () => {
  const query = useQueryParams();
  const searchQuery = query.get('search');

  const { isLoading, isError, data } = useQuery([searchQuery], () => searchService(searchQuery as string));

  const { categories = [], items = [] } = (data as SearchResponse) || {};

  if (isLoading) {
    return (
      <StyledSearchResults>
        <span>Is loading...</span>
      </StyledSearchResults>
    );
  }

  if (isError) {
    return (
      <StyledSearchResults>
        <span>An error has been ocurred</span>
      </StyledSearchResults>
    );
  }

  return (
    <StyledSearchResults>
      <Breadcrumbs categories={categories} />
      <Results items={items} />
    </StyledSearchResults>
  );
};

export default SearchResults;
