import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root';
import {rootStore as store, history} from './store';
import './styles/base.css';


render(
    <Root store={store} history={history}/>,
    document.getElementById('root')
);
