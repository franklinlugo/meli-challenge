import * as React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Home: React.FC = () => {
  return (
    <>
      <SearchBar />
      <SearchResults />
    </>
  );
};

export default Home;
