import React, {Component} from 'react';
import {Provider, inject, observer} from 'mobx-react';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import {Router} from 'react-router';

import Routes from '../routes/routes';

export default function Root({store, history}) {
  return (
    <Provider {...store}>
      <Router history={history}>
        <Routes/>
      </Router>
    </Provider>
  );
}
