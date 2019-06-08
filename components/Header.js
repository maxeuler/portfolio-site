import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';
import { Subtitle } from './Landing';

const StyledHeader = styled.header`
	width: 100%;
	border-bottom: 5px solid ${props => props.theme.primaryColor};
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	font-size: 2rem;
	a {
		text-decoration: none;
	}
`;

const Header = props => (
	<StyledHeader>
		<Link href="/">
			<a>
				<Subtitle>Max Euler</Subtitle>
			</a>
		</Link>
		<Nav />
	</StyledHeader>
);

export default Header;
