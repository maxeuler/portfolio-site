import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import { Subtitle } from './Landing';

Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

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
	@media (max-width: 700px) {
		.logo {
			display: none;
		}
	}
`;

const Header = props => (
	<StyledHeader>
		<Link href="/">
			<a className="logo">
				<Subtitle>Max Euler</Subtitle>
			</a>
		</Link>
		<Nav />
	</StyledHeader>
);

export default Header;
