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
		max-width: 500px;
	}
`;

const AboutText = props => (
	<Text>
		<Title>Who Am I?</Title>
		<p>Nobody wants to read long texts, so just the facts:</p>
		<ul>
			<li>
				Studying Computer Science at{' '}
				<a href="https://www.mni.thm.de/">
					Teschnische Hochschule Mittelhessen
				</a>
			</li>
			<li>In love with JavaScript</li>
			<li>Working as a Salesforce Developer</li>
			<li>Node, React, MongoDB and GraphQL is what I'm learning everyday</li>
		</ul>
	</Text>
);

export default AboutText;
