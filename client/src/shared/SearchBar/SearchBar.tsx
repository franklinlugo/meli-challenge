import * as React from 'react';
import logo from 'assets/images/logo.png';
import searchLogo from 'assets/images/searchLogo.png';
import { Link, useHistory } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';
import { StyledSearchBar } from './SearchBarStyles';

const SearchBar: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const history = useHistory();

  function handleSearchTerm(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  React.useEffect(() => {
    if (searchTerm) {
      history.push(`items?search=${searchTerm}`);
    } else {
      history.push('/');
    }
  }, [history, searchTerm]);

  function handleSearchBtn() {
    inputRef?.current?.focus();
  }

  return (
    <StyledSearchBar>
      <Link to={ROUTES.HOME} className="linkLogo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          name="searchTerm"
          ref={inputRef}
          value={searchTerm}
          onChange={handleSearchTerm}
        />
        <button className="searchBtn" type="button" onClick={handleSearchBtn}>
          <img src={searchLogo} alt="logo" />
        </button>
      </div>
    </StyledSearchBar>
  );
};

export default SearchBar;
