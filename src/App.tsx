import * as React from 'react';
import { SearchResults, ProductDetail } from '@pages';
import { SearchBar } from 'shared';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';

const App: React.FC = () => {
  return (
    <Router>
      <SearchBar />
      <Switch>
        <Route exact path={ROUTES.SEARCH_RESULTS}>
          <SearchResults />
        </Route>
        <Route exact path={ROUTES.PRODUCT_DETAIL}>
          <ProductDetail />
        </Route>
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </Router>
  );
};

export default App;
