import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.ul`
	display: flex;
	list-style: none;
	justify-self: end;
	justify-content: center;
	a {
		text-decoration: none;
		color: white;
		padding: 1rem 3rem;
		:hover {
			color: ${props => props.theme.hover};
			font-style: italic;
		}
	}
	@media (max-width: 700px) {
		width: 100%;
		margin: 0;
		padding: 0;
		justify-self: center;
		a {
			padding: 1rem;
		}
	}
`;

const Nav = props => (
	<NavBar>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/projects" prefetch>
			<a>Projects</a>
		</Link>
		<Link href="/about">
			<a>About</a>
		</Link>
		<Link href="/contact" prefetch>
			<a>Contact</a>
		</Link>
	</NavBar>
);

export default Nav;
