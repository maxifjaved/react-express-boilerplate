import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import DashboardPage from './components/dashboard/DashboardPage';
import NotFoundPage from './components/error/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)
