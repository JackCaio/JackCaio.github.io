import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default class Template extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="page__template">
        <Header />
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
