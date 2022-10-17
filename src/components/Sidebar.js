import React, { Component } from 'react';
import { MdCode, MdContacts, MdNotes } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="page__sidenav">
        <div className="profile__img" />
        <NavLink exact to="/" activeClassName="nav__active" className="nav">
          <MdNotes />
          Sobre
        </NavLink>
        <NavLink to="/projects" activeClassName="nav__active" className="nav">
          <MdCode />
          Projetos
        </NavLink>
        <NavLink to="/contact" activeClassName="nav__active" className="nav">
          <MdContacts />
          Contato
        </NavLink>
      </div>
    );
  }
}

// links de navegação - Sobre | Projetos | Contato
