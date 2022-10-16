import React, { Component } from 'react';

export default class HamburgIcon extends Component {
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
    const { menu } = this.state;
    return (
      <button
        type="button"
        className={ `hamburg__icon ${menu}` }
        onClick={ this.toggleMenu }
      >
        <div className="stick top" />
        <div className="stick mid" />
        <div className="stick bot" />
      </button>
    );
  }
}
