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

  render() {
    const { children } = this.props;
    const { menu } = this.state;
    return (
      <div className={ `page__template ${menu}__sidebar` }>
        <Header />
        <Sidebar />
        <div className="page__content">
          {children}
        </div>
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
