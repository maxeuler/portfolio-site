import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const Title = styled.h1`
	color: white;
	font-size: 7rem;
	font-weight: 300;
	text-align: center;
`;

export const Subtitle = styled.h1`
	color: white;
	font-size: 2.5rem;
	font-weight: 300;
	text-align: center;
`;

const SmallButton = styled.button`
	background: none;
	border: 1px solid white;
	border-radius: 4px;
	color: white;
	padding: 1rem;
	margin: 2rem auto;
	font-size: 1.5rem;
	cursor: pointer;
	:hover {
		color: ${props => props.theme.hover};
		border-color: ${props => props.theme.hover};
	}
`;

const Landing = props => (
	<div>
		<Title>Max Euler</Title>
		<Subtitle>Full Stack Developer</Subtitle>
		<Subtitle>
			<Link href="/projects">
				<a>
					<SmallButton>View Projects</SmallButton>
				</a>
			</Link>
		</Subtitle>
	</div>
);

export default Landing;
