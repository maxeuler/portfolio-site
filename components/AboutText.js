import React from 'react';
import styled from 'styled-components';
import { Title } from './Landing';

const Text = styled.div`
	color: #fff;
	font-size: 2.3rem;
	margin 1rem auto;
	p {
		text-align: center;
	}
	a {
		color: #fff;
		text-decoration: none;
		font-weight: bold;
	}
	ul {
		font-size: 2rem;
		max-width: 700px;
		margin: 0 auto;
		line-height: 2;
	}
	@media (max-width: 700px) {
		font-size: 2rem;
		margin: 0;
		height: 100%;
		p {
			width: 100%;
			margin: 2rem auto;
			line-height: 1.5;
			max-width: 250px;
		}
		ul {
			font-size: 1.5rem;
			list-style: none;
			max-width: 300px;
			line-height: 2;
		}
	}
`;

const AboutText = props => (
	<Text>
		<Title>Who Am I?</Title>
		<p>Nobody wants to read a long text, so just the facts:</p>
		<ul>
			<li>
				22 years old guy who is studying Computer Science at{' '}
				<a href="https://www.mni.thm.de/" target="_blank">
					Technische Hochschule Mittelhessen
				</a>
			</li>
			<li>In love with JavaScript</li>
			<li>Working as a Salesforce Developer</li>
			<li>Node, React, MongoDB and GraphQL is what I'm learning everyday</li>
			<li>Only at the beginning, but on the right way</li>
		</ul>
	</Text>
);

export default AboutText;
