import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.header`
	width: 100%;
	border-bottom: 5px solid ${props => props.theme.primaryColor};
	color: white;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	font-size: 2rem;
`;

const Header = props => (
	<StyledHeader>
		<h3>Max Euler</h3>
		<Nav />
	</StyledHeader>
);

export default Header;
