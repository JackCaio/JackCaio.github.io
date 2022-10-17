import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MdCode, MdContacts, MdNotes } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    const { menuState } = this.props;
    return (
      <div className={ `page__sidenav ${menuState}` }>
        <div className="profile__img" />
        <NavLink exact to="/" activeClassName="nav__active" className="nav">
          <MdNotes />
          <span className="nav__txt">Sobre</span>
        </NavLink>
        <NavLink to="/projects" activeClassName="nav__active" className="nav">
          <MdCode />
          <span className="nav__txt">Projetos</span>
        </NavLink>
        <NavLink to="/contact" activeClassName="nav__active" className="nav">
          <MdContacts />
          <span className="nav__txt">Contato</span>
        </NavLink>
      </div>
    );
  }
}

Sidebar.propTypes = {
  menuState: PropTypes.string.isRequired,
};

// links de navegação - Sobre | Projetos | Contato
