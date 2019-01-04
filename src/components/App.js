import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';

import Layout from './Layout';
import Router from './Router';
import Theme from './Theme';

const App = () => (
  <Router>
    <Theme>
      <Layout>
        <Route path="/" />
        <Route path="/:id" />
      </Layout>
    </Theme>
  </Router>
);

export default hot(App);
