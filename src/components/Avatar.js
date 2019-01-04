import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled('img')``;

export const Avatar = ({ image, name }) => (
  <figure>
    <Image
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      alt={name}
      style={{ backgroundImage: image }}
    />
  </figure>
);

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default styled(Avatar)`
  border-radius: 0.4rem;
  height: 4rem;
  overflow: hidden;
  width: 4rem;

  ${Image} {
    width: 100%;
  }
`;
