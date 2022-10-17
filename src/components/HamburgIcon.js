import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class HamburgIcon extends Component {
  render() {
    const { menuControl: { menu, toggleMenu } } = this.props;
    return (
      <button
        type="button"
        className={ `hamburg__icon ${menu}` }
        onClick={ toggleMenu }
      >
        <div className="stick top" />
        <div className="stick mid" />
        <div className="stick bot" />
      </button>
    );
  }
}

HamburgIcon.propTypes = {
  menuControl: PropTypes.shape({
    menu: PropTypes.string,
    toggleMenu: PropTypes.func,
  }).isRequired,
};
