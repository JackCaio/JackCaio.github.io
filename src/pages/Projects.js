import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import Template from '../components/Template';
import projects from '../helpers/projects';

export default class Projects extends Component {
  render() {
    return (
      <Template>
        <div
          style={ { display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            // gridAutoRows: '20%',
            gap: '10px',
            padding: '10px' } }
        >
          {projects.map((projeto, i) => <ProjectCard key={ i } projeto={ projeto } />)}
        </div>
      </Template>
    );
  }
}
