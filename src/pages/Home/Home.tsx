import * as React from 'react';
import SearchBar from './SearchBar';
import SearchResultsLayout from './SearchResultsLayout';
import Breadcrumbs from './Breadcrumbs';
import Results from './Results';

const Home: React.FC = () => {
  return (
    <>
      <SearchBar />
      <SearchResultsLayout>
        <Breadcrumbs />
        <Results />
      </SearchResultsLayout>
    </>
  );
};

export default Home;
