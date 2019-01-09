import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router-dom';

import AddressBook from './AddressBook';
import Router from './Router';
import Theme from './Theme';

const Detail = () => null;
const Empty = () => null;

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
