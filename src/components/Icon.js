import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = ({ name }) => <i className="material-icons">{name}</i>;

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default styled(Icon)``;
