import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const Title = styled.h1`
	color: white;
	font-size: 7rem;
	font-weight: 300;
	text-align: center;
	@media (max-width: 700px) {
		font-size: 5rem;
	}
`;

export const Subtitle = styled.h1`
	color: white;
	font-size: 2.5rem;
	font-weight: 300;
	text-align: center;
	img {
		height: 60px;
		margin: 0 2rem;
		opacity: 0.7;
	}
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
		<Subtitle>
			<a href="https://www.xing.com/profile/Max_Euler4/cv" target="_blank">
				<img src="./static/xing.png" alt="" />
			</a>
			<a href="https://github.com/maxeuler" target="_blank">
				<img src="./static/github.png" alt="" />
			</a>
		</Subtitle>
	</div>
);

export default Landing;
