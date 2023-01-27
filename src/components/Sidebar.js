import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MdCode, MdNotes } from 'react-icons/md';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    const { sidebar } = this.props;
    const menuState = sidebar ? 'open' : 'close';
    return (
      <div className={ `page__sidenav ${menuState}` }>
        {/* <div className="profile__img" /> */}
        <NavLink exact to="/" activeClassName="nav__active" className="nav">
          <MdNotes />
          <span className="nav__txt">Sobre</span>
        </NavLink>
        <NavLink to="/projects" activeClassName="nav__active" className="nav">
          <MdCode />
          <span className="nav__txt">Projetos</span>
        </NavLink>
        {/* <NavLink to="/contact" activeClassName="nav__active" className="nav">
          <MdContacts />
          <span className="nav__txt">Contato</span>
        </NavLink> */}
      </div>
    );
  }
}

Sidebar.propTypes = {
  sidebar: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebarControl.sidebar,
});

export default connect(mapStateToProps)(Sidebar);

// links de navegação - Sobre | Projetos | Contato
