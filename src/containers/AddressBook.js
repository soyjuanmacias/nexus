import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../components/Layout';

import List from './List';

class AddressBook extends Layout {
  static propTypes = {
    ...Layout.propTypes,
    className: PropTypes.string,
  };

  render() {
    const element = super.render();
    const { className } = this.props;

    return (
      element && (
        <main className={className}>
          <List />
          {element}
        </main>
      )
    );
  }
}

export default styled(AddressBook)``;
