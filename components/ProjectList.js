import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import projects from '../static/projects.json';

const Projects = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
	margin: 2rem 0;
`;

class ProjectList extends Component {
	state = {
		projects: []
	};

	async componentDidMount() {
		this.setState({ projects });
	}
	render() {
		return (
			<Projects>
				{this.state.projects.map(project => (
					<ProjectCard project={project} />
				))}
			</Projects>
		);
	}
}

export default ProjectList;
