import * as React from 'react';
import { Breadcrumbs } from 'shared';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import Results from './Results';
import { StyledSearchResults } from './SearchResultsStyles';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

function useDebounce(value: string, delay = 500) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const SearchResults: React.FC = () => {
  const query = useQueryParams();
  const searchQuery = query.get('search');
  const debouncedSearchQuery = useDebounce(searchQuery as string, 600);

  function search() {
    return fetch(`http://localhost:4000/items?search=${debouncedSearchQuery}`).then((res) => res.json());
  }

  const { refetch, isLoading, isError, data } = useQuery(debouncedSearchQuery, search, {
    enabled: false,
  });

  React.useEffect(() => {
    refetch();
  }, [refetch, debouncedSearchQuery]);

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
      <Breadcrumbs categories={data?.categories} />
      <Results items={data?.items} />
    </StyledSearchResults>
  );
};

export default SearchResults;
