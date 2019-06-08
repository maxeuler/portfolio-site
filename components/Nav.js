import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.ul`
	display: flex;
	list-style: none;
	justify-self: end;
	a {
		text-decoration: none;
		color: white;
		padding: 1rem 3rem;
		:hover {
			color: ${props => props.theme.hover};
			font-style: italic;
		}
	}
`;

const Nav = props => (
	<NavBar>
		<Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/projects">
			<a>Projects</a>
		</Link>
		<Link href="/about">
			<a>About</a>
		</Link>
		<Link href="/contact">
			<a>Contact</a>
		</Link>
	</NavBar>
);

export default Nav;
