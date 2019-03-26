import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import indexRoutes from 'routes/index.jsx';
import configureStore from 'store/configureStore';
import { requireAuth } from 'variables/auth.jsx';


import 'assets/css/material-dashboard-react.css?v=1.5.0';

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => <Route path={prop.path} component={prop.component} componentWillReceiveProps={requireAuth} key={key} />)}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
