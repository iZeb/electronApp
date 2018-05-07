import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './Css/index.css';
import registerServiceWorker from './registerServiceWorker';
import Routers from './Route/index'

ReactDOM.render(
  <BrowserRouter>
    <div>
      {Routers()}
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker();
