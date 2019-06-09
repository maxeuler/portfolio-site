import React from 'react';
import styled from 'styled-components';
import { Title } from './Landing';

const ContactBar = styled.div`
	margin-top: 5rem;
	display: flex;
	justify-content: space-between;
	margin: 4rem;
	max-width: 1200px;
	img {
		height: 200px;
	}
	@media (max-width: 1200px) {
		img {
			height: 200px;
		}
	}
	@media (max-width: 800px) {
		img {
			height: 150px;
		}
	}
	@media (max-width: 600px) {
		flex-direction: column;
		height: 50vh;
		align-items: center;
		img {
			height: 80px;
		}
		margin: 4rem;
	}
`;

const Contact = props => (
	<div>
		<Title>Contact</Title>
		<ContactBar>
			<a href="https://www.xing.com/profile/Max_Euler4/cv" target="_blank">
				<img src="./static/xing.png" alt="" />
			</a>
			<a href="https://github.com/maxeuler" target="_blank">
				<img src="./static/github.png" alt="" />
			</a>
			<a href="mailto:maxjuliuseuler@gmail.com" target="_blank">
				<img src="./static/gmail.png" alt="" />
			</a>
		</ContactBar>
	</div>
);

export default Contact;
