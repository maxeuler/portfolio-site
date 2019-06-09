import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import projects from '../static/projects.json';

const Projects = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 60px;
	margin: 4rem 2rem;
	@media (max-width: 1200px) {
		grid-template-columns: 1fr;
	}
`;

class ProjectList extends Component {
	state = {
		projects: []
	};

	async componentDidMount() {
		this.setState({ projects });
	}

	s;
	render() {
		return (
			<>
				<Projects>
					{this.state.projects.map(project => (
						<ProjectCard
							key={project.git_url}
							project={project}
							showPreview={this.showPreview}
							hidePreview={this.showPreview}
						/>
					))}
				</Projects>
			</>
		);
	}
}

export default ProjectList;
