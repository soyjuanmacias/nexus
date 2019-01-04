import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';

import Router from './Router';
import Theme from './Theme';

import AddressBook from '../containers/AddressBook';

const Detail = () => {};
const Empty = () => {};

const App = () => (
  <Router>
    <Theme>
      <AddressBook>
        <Route path="/:id" component={Detail} />
        <Route component={Empty} />
      </AddressBook>
    </Theme>
  </Router>
);

export default hot(App);
