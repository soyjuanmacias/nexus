import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const List = ({
  className,
  emptyTemplate: Empty,
  items,
  options,
  template: Template,
}) => (
  <ul className={className}>
    {items.map((item, index) => (
      <li key={JSON.stringify(item)}>
        <Template
          {...options}
          index={index}
          item={item}
          {...typeof item === 'object' && item}
        />
      </li>
    ))}
    {items.length === 0 && <Empty {...options} />}
  </ul>
);

List.defaultProps = {
  className: '',
  emptyTemplate() {
    return null;
  },
  items: [],
  options: {},
  template({ item }) {
    return item;
  },
};

List.propTypes = {
  className: PropTypes.string,
  emptyTemplate: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.any),
  options: PropTypes.objectOf(PropTypes.any),
  template: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default styled(List)``;
