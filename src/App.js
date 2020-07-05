import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <HomePage />} />
    </Switch>
  );
}

export default App;
