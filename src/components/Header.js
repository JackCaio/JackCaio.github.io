// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import HamburgIcon from './HamburgIcon';

export default class Header extends Component {
  render() {
    const gitIcon = <AiFillGithub />;
    const linIcon = <AiFillLinkedin />;
    return (
      <header className="page__header">
        {/* <h1>Header</h1> */}
        <HamburgIcon />
        <div className="social__links">
          <a href="https://github.com/JackCaio" target="_blank" rel="noreferrer">
            {gitIcon}
          </a>
          <a href="https://www.linkedin.com/in/caio-iack/" target="_blank" rel="noreferrer">
            {linIcon}
          </a>
        </div>
      </header>
    );
  }
}

// Header.propTypes = {
//   menuControl: PropTypes.shape({
//     menu: PropTypes.string,
//     toggleMenu: PropTypes.func,
//   }).isRequired,
// };

// Links para rede social + nome/logo
