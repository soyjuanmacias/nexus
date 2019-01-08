import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Contact from './Item';
import List from '../List';

const ContactList = ({ className, items }) => (
  <List className={className} items={items} template={Contact} />
);

ContactList.defaultProps = {
  className: '',
  items: [],
};

ContactList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any),
};

export default styled(ContactList)``;
