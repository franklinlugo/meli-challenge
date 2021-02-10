import * as React from 'react';
import { Home } from '@pages';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PUBLIC_ROUTES } from 'utils/constants/routes';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={PUBLIC_ROUTES.HOME}>
          <Home />
        </Route>
        <Redirect to={PUBLIC_ROUTES.HOME} />
      </Switch>
    </Router>
  );
};

export default App;
