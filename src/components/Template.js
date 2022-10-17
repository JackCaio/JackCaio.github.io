import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default class Template extends Component {
  constructor() {
    super();
    this.state = {
      menu: 'open',
    };
  }

  toggleMenu = () => {
    const { menu } = this.state;
    if (menu === 'open') {
      this.setState({ menu: 'close' });
    }
    if (menu === 'close') {
      this.setState({ menu: 'open' });
    }
  };

  render() {
    const { children } = this.props;
    const { menu } = this.state;
    const menuControl = { menu, toggleMenu: this.toggleMenu };
    return (
      <div className="page__template">
        <Header menuControl={ menuControl } />
        <Sidebar />
        <div style={ { gridArea: 'content' } }>
          {children}
        </div>
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
};
