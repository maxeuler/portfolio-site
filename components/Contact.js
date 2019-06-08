import React from 'react';
import styled from 'styled-components';
import { Title } from './Landing';

const ContactBar = styled.div`
	margin-top: 5rem;
	display: flex;
	justify-content: space-between;
	img {
		height: 300px;
	}
`;

const Contact = props => (
	<div>
		<Title>Contact</Title>
		<ContactBar>
			<a href="https://www.xing.com/profile/Max_Euler4/cv">
				<img src="./static/xing.png" alt="" />
			</a>
			<a href="https://github.com/maxeuler">
				<img src="./static/github.png" alt="" />
			</a>
			<a href="mailto:maxjuliuseuler@gmail.com">
				<img src="./static/gmail.png" alt="" />
			</a>
		</ContactBar>
	</div>
);

export default Contact;
