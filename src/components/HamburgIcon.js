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
        className={ `hamburg__icon ${menuState}` }
        onClick={ this.handleMenu }
      >
        <div className="stick top" />
        <div className="stick mid" />
        <div className="stick bot" />
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
