import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

export default class ProjectCard extends Component {
  render() {
    const { projeto } = this.props;
    console.log(projeto);
    return (
      <div
        style={ { backgroundColor: '#181a1f',
          padding: '15px',
          borderRadius: '20px' } }
      >
        <div style={ { display: 'flex', gap: '10px' } }>
          <h2>{projeto.name}</h2>
          <a
            style={ { marginLeft: 'auto', fontSize: '1.5em', color: 'white' } }
            href={ projeto.demo }
            rel="noreferrer"
          >
            <AiOutlineLink />
          </a>
          <a
            style={ { fontSize: '1.5em', color: 'white' } }
            href={ projeto.gith }
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>
        <hr />
        <div>
          <p style={ { marginTop: '10px' } }>{projeto.desc}</p>
        </div>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  projeto: PropTypes.shape({
    name: PropTypes.string,
    demo: PropTypes.string,
    gith: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
};
