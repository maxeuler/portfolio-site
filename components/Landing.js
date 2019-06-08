import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
	height: 100vh;
	background-image: url('../static/landing.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Overlay = styled.div`
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.7);
`;

const Landing = props => (
	<Background>
		<Overlay />
	</Background>
);

export default Landing;
