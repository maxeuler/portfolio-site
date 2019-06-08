import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
	border-radius: 4px;
	height: 600px;
	background: rgba(236, 240, 241, 0.7);
	img {
		width: 100%;
    height: 50%
		object-fit: cover;
	}
	.content {
		width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 50%;
    h1 {
      text-align: center;
      font-weight: 300;
      font-size: 3rem;
    }
    p {
      flex-grow: 1;
      padding: 2rem;
      font-size: 1.8rem;
      text-align: center;
    }
    .buttons {
      width: 100%;
      border-top: 1px solid #000;
      display: grid;
      grid-template-columns: 1fr;
      bottom: 0;
      a {
        text-decoration: none;
        color: #000;
        font-size: 2rem;
        padding: 1.5rem 0;
        text-align: center;

      }
      :hover {
        background: rgba(236, 240, 241, 0.8);
      }
    }
	}
`;

const ProjectCard = props => (
	<Card>
		<img
			src={props.project.image}
			alt=""
			onMouseOver={props.showPreview}
			onMouseLeave={props.hidePreview}
		/>
		<div className="content">
			<h1>{props.project.name}</h1>
			<p>{props.project.description}</p>
			<div className="buttons">
				<Link href={props.project.git_url}>
					<a target="_blank">View on GitHub</a>
				</Link>
			</div>
		</div>
	</Card>
);

export default ProjectCard;
