import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from './configuration';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

/* Linter understands this as an expressions instead of a function call */
// eslint-disable-next-line no-unused-expressions
createGlobalStyle`
  body {
    background-color: ${theme['--primary-background-color']};
    color: ${theme['--text-primary-color']};
    font-family: 'Maison Neue', sans-serif;
    font-size: ${theme['--font-size-normal']};
  }
`;

export default Theme;
