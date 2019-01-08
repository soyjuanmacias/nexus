import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Avatar from '../Avatar';

const Container = styled('div')``;
const Name = styled('span')``;
const Phone = styled('span')``;

const Contact = ({
  className,
  name: { first, last },
  phone,
  picture: { thumbnail },
}) => (
  <article className={className}>
    <Avatar image={thumbnail} name={`${first} ${last}`} />
    <Container>
      <Name>{`${first} ${last}`}</Name>
      <Phone>{phone}</Phone>
    </Container>
  </article>
);

Contact.defaultProps = {
  className: '',
  phone: '',
  picture: {},
};

Contact.propTypes = {
  className: PropTypes.string,
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  phone: PropTypes.string,
  picture: PropTypes.shape({
    thumbnail: PropTypes.string,
  }),
};

export default styled(Contact)`
  display: flex;

  ${Container} {
    display: flex;
    flex-direction: column;
  }

  ${Name} {
    font-weight: ${props => props.theme['--font-weight-medium']};
  }

  ${Phone} {
    ${props => props.theme['--font-small']};
    color: ${props => props.theme['--font-opacity-60']};
  }
`;
