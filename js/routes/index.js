import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import SearchView from 'views/Search';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={SearchView} />
  </Route>
);
