import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../redux/actions';

class HamburgIcon extends Component {
  handleMenu = () => {
    const { dispatch } = this.props;
    dispatch(toggleMenu());
  };

  render() {
    const { sidebar } = this.props;
    const menuState = sidebar ? 'open' : 'close';
    return (
      <button
        type="button"
        className="menu-btn"
        onClick={ this.handleMenu }
      >
        <svg
          fill="var(--hamburg-color)"
          className={ `hamburg__icon ${menuState}` }
          viewBox="0 0 100 100"
        >
          <rect
            className="line top"
            width="80"
            height="10"
            x="10"
            rx="5"
            y="25"
          />
          <rect
            className="line mid"
            width="80"
            height="10"
            x="10"
            rx="5"
            y="45"
          />
          <rect
            className="line bot"
            width="80"
            height="10"
            x="10"
            rx="5"
            y="65"
          />
        </svg>
      </button>
    );
  }
}

HamburgIcon.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebarControl.sidebar,
});

export default connect(mapStateToProps)(HamburgIcon);
