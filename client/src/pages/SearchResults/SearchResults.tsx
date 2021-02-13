import * as React from 'react';
import { Breadcrumbs } from 'shared';
import { useLocation } from 'react-router-dom';
import { useMutation } from 'react-query';
import Results from './Results';
import { StyledSearchResults } from './SearchResultsStyles';

function useQuery() {
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
  const query = useQuery();
  const searchQuery = query.get('search');
  const debouncedSearchQuery = useDebounce(searchQuery as string, 600);

  function search(term: string) {
    return fetch(`http://localhost:4000/items?search=${term}`).then((res) => res.json());
  }

  const { mutate, isLoading, isError, data } = useMutation((term: string) => search(term));

  React.useEffect(() => {
    mutate(debouncedSearchQuery);
  }, [mutate, debouncedSearchQuery]);

  React.useEffect(() => {
    console.log('data', data);
  }, [data]);

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
      <Breadcrumbs />
      <Results />
    </StyledSearchResults>
  );
};

export default SearchResults;
