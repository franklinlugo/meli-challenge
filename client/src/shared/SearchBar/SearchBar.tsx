import * as React from 'react';
import logo from 'assets/images/logo.png';
import searchLogo from 'assets/images/searchLogo.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { StyledSearchBar } from './SearchBarStyles';

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

const SearchBar: React.FC = () => {
  const query = useQueryParams();
  const searchQuery = query.get('search');
  const [searchTerm, setSearchTerm] = React.useState(searchQuery || '');
  const history = useHistory();

  function handleSearchTerm(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!searchTerm) return;
    history.push(`/items?search=${searchTerm}`);
  }

  return (
    <StyledSearchBar>
      <Link to={ROUTES.HOME} className="linkLogo">
        <img src={logo} alt="logo" />
      </Link>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" type="text" name="searchTerm" value={searchTerm} onChange={handleSearchTerm} />
        <button className="searchBtn" type="submit">
          <img src={searchLogo} alt="logo" />
        </button>
      </form>
    </StyledSearchBar>
  );
};

export default SearchBar;
