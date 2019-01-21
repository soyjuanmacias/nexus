import React, { Component } from 'react';
import { rgba, parseToHsl } from 'polished';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import contactService from '../../services/contacts';

import Icon from '../Icon';
import Link from '../Link';

const Container = styled('section')``;
const Header = styled('header')``;

class ContactDetails extends Component {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
  };

  state = {
    data: {},
    loading: true,
  };

  componentDidMount() {
    this._getContact(this.props.match.params.id);
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      await this._getContact(nextProps.match.params.id);
      return true;
    }
    return false;
  }

  async _getContact(id) {
    this.setState({ loading: true });
    let contact = {};
    await contactService.read(id).then(res => (contact = res));
    this.setState({
      data: contact,
      loading: false,
    });
  }

  _shouldRenderContactName(data) {
    if (!this.state.loading) {
      return this._renderContactName(data);
    }
    return 'Loading...';
  }

  _renderContactName(data) {
    return (
      <div>
        {this._capitalizeFirstLetter(data.name.first)}
        {' '}
        {this._capitalizeFirstLetter(data.name.last)}
      </div>
    );
  }

  _shouldRenderContactInfo(data) {
    if (!this.state.loading) {
      return this._renderContactInfo(data);
    }
    return 'Loading...';
  }

  _renderContactInfo(data) {
    return (
      <div>
        <div>{data.cell}</div>
        Mobile
        <div>{data.phone}</div>
        Work
        <div>{data.email}</div>
        Email
        <div>Rest of data...</div>
      </div>
    );
  }

  _capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    const { className } = this.props;
    const { data } = this.state;
    return (
      <article className={className}>
        <Header>
          <Link to="/">
            <Icon>arrow_back_ios</Icon>
          </Link>
          {this._shouldRenderContactName(data)}
        </Header>
        <Container>{this._shouldRenderContactInfo(data)}</Container>
      </article>
    );
  }
}

export default styled(ContactDetails)`
  background: ${props => props.theme['--color-light']};
  height: calc(100% - 2.5rem);
  position: fixed;
  top: 2.5rem;
  width: 100%;
  //
  ${Header} {
    ${props => props.theme['--font-extra-large']};
    align-items: center;
    display: flex;
    height: 5rem;
    justify-content: center;
    text-align: center;

    ${Icon} {
      height: 5rem;
      left: 0;
      line-height: 5rem;
      position: absolute;
      top: 0;
      width: 5rem;
    }
  }

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (${props => props.theme['--screen-medium']}) {
    border-left: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
    left: 32rem;
    width: calc(100% - 32rem);
  }
`;
