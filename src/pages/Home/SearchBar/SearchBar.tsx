import * as React from 'react';
import logo from 'assets/images/logo.png';
import searchLogo from 'assets/images/searchLogo.png';
import { StyledSearchBar } from './SearchBarStyles';

const SearchBar: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  function handleSearchBtn() {
    inputRef?.current?.focus();
  }

  return (
    <StyledSearchBar>
      <img className="logo" src={logo} alt="logo" />
      <div className="inputContainer">
        <input className="input" type="text" name="searchTerm" ref={inputRef} />
        <button className="searchBtn" type="button" onClick={handleSearchBtn}>
          <img src={searchLogo} alt="logo" />
        </button>
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
