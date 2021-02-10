import * as React from 'react';
import { Home } from '@pages';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </Router>
  );
};

export default App;
