import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';
import HomePage from '../components/Home';
import CounterPage from '../components/Counter';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
